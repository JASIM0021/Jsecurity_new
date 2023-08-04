// ShellModule.java
package com.jsecurity_new;
import android.os.AsyncTask;
import android.os.Build;
import android.util.Log;
import java.io.BufferedReader;
import java.io.InputStreamReader;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class ShellModule extends ReactContextBaseJavaModule {

    private static final String TAG = "ShellModule";
    private ReactApplicationContext reactContext;

    public ShellModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "ShellModule";
    }

    @ReactMethod
    public void executeShellCommand(String command, Promise promise) {
        try {
            Process process = Runtime.getRuntime().exec(command);
            int exitCode = process.waitFor();

            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            StringBuilder output = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                output.append(line).append("\n");
            }

            if (exitCode == 0) {
                promise.resolve(output.toString());
            } else {
                promise.reject("ERROR", "Shell command failed");
            }
        } catch (Exception e) {
            promise.reject("ERROR", e.getMessage());
        }
    }
}
