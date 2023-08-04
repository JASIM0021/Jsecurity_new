import DeviceInfo from "react-native-device-info";

const getDeviceInfo = async () => {
  try {
    const androidId = await DeviceInfo.getAndroidId();
    const uniqueId = await DeviceInfo.getUniqueId();
    const apiLevel = await DeviceInfo.getApiLevel();
    const baseOs = await DeviceInfo.getBaseOs();
    const bootloader = await DeviceInfo.getBootloader();
    const isCameraPresent = await DeviceInfo.isCameraPresent();
    const codename = await DeviceInfo.getCodename();
    const device = await DeviceInfo.getDevice();
    const display = await DeviceInfo.getDisplay();
    const firstInstallTime = await DeviceInfo.getFirstInstallTime();
    const fingerprint = await DeviceInfo.getFingerprint();
    const hardware = await DeviceInfo.getHardware();
    const host = await DeviceInfo.getHost();
    const incremental = await DeviceInfo.getIncremental();
    const installerPackageName = await DeviceInfo.getInstallerPackageName();
    const installReferrer = await DeviceInfo.getInstallReferrer();
    const instanceId = await DeviceInfo.getInstanceId();
    const lastUpdateTime = await DeviceInfo.getLastUpdateTime();
    const maxMemory = await DeviceInfo.getMaxMemory();
    const phoneNumber = await DeviceInfo.getPhoneNumber();
    const product = await DeviceInfo.getProduct();
    const previewSdkInt = await DeviceInfo.getPreviewSdkInt();
    const serialNumber = await DeviceInfo.getSerialNumber();
    const securityPatch = await DeviceInfo.getSecurityPatch();
    const systemAvailableFeatures =
      await DeviceInfo.getSystemAvailableFeatures();
    const tags = await DeviceInfo.getTags();
    const type = await DeviceInfo.getType();
    const getBatteryLevel = await DeviceInfo.getBatteryLevel();
    const brand = await DeviceInfo.getBrand();
    const model = await DeviceInfo.getModel();
    const number = await DeviceInfo.getPhoneNumber();
    const ipAddress = await DeviceInfo.getIpAddress();
    const deviceName = await DeviceInfo.getDeviceName();
    const allPackage = await DeviceInfo.getInstallerPackageName();
    const powerState = await DeviceInfo.getPowerState();
    const totalMemory = await DeviceInfo.getTotalMemory();
    const version = await DeviceInfo.getVersion();
    const isAirplaneMode = await DeviceInfo.isAirplaneMode();
    const supported32BitAbis = await DeviceInfo.supported32BitAbis();
    const supported64BitAbis = await DeviceInfo.supported64BitAbis();

    return {
      androidId,
      uniqueId,
      apiLevel,
      baseOs,
      bootloader,
      isCameraPresent,
      codename,
      device,
      display,
      firstInstallTime,
      fingerprint,
      hardware,
      host,
      incremental,
      installerPackageName,
      installReferrer,
      instanceId,
      lastUpdateTime,
      maxMemory,
      phoneNumber,
      product,
      previewSdkInt,
      serialNumber,
      securityPatch,
      systemAvailableFeatures,
      tags,
      type,
      getBatteryLevel,
      isAirplaneMode,
      supported32BitAbis,
      supported64BitAbis,
      brand,
      model,
      number,
      ipAddress,
      deviceName,
      allPackage,
      powerState,
      totalMemory,
      version,
    };
  } catch (error) {
    console.error("Error fetching device info:", error);
    throw error;
  }
};

export default getDeviceInfo;
