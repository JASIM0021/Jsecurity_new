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
        new ShellTask(promise).execute(command);
    }

    private class ShellTask extends AsyncTask<String, Void, String> {
        private final Promise promise;

        public ShellTask(Promise promise) {
            this.promise = promise;
        }

        @Override
        protected String doInBackground(String... commands) {
            try {
                Process process = Runtime.getRuntime().exec(commands[0]);
                int exitCode = process.waitFor();

                BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
                StringBuilder output = new StringBuilder();
                String line;
                while ((line = reader.readLine()) != null) {
                    output.append(line).append("\n");
                }

                if (exitCode == 0) {
                    return output.toString();
                } else {
                    return "Shell command failed";
                }
            } catch (Exception e) {
                return e.getMessage();
            }
        }

        @Override
        protected void onPostExecute(String result) {
            if (result != null) {
                promise.resolve(result);
            } else {
                promise.reject("ERROR", "Shell command failed");
            }
        }
    }
}
