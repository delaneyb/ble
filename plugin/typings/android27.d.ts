/// <reference path="../node_modules/tns-platform-declarations/android/android17.d.ts" />
import javalangObject = java.lang.Object;
import javalangInteger = java.lang.Integer;
import javalangFloat = java.lang.Float;
import javautilList = java.util.List;
import javautilUUID = java.util.UUID;
import javautilMap = java.util.Map;
import javautilregexPattern = java.util.regex.Pattern;

declare namespace android {
  namespace content { namespace Context { var BLUETOOTH_SERVICE: string; } }
}

declare namespace android {
  namespace bluetooth {
    namespace BluetoothDevice {
      var TRANSPORT_LE: number;
    }
    interface BluetoothDevice {
      connectGatt(
        param0: android.content.Context,
        param1: boolean,
        param2: android.bluetooth.BluetoothGattCallback,
        param3: number
      ): android.bluetooth.BluetoothGatt;
      connectGatt(
        param0: android.content.Context,
        param1: boolean,
        param2: android.bluetooth.BluetoothGattCallback,
        param3: number,
        param4: number
      ): android.bluetooth.BluetoothGatt;
      connectGatt(
        param0: android.content.Context,
        param1: boolean,
        param2: android.bluetooth.BluetoothGattCallback
      ): android.bluetooth.BluetoothGatt;
      connectGatt(
        param0: android.content.Context,
        param1: boolean,
        param2: android.bluetooth.BluetoothGattCallback,
        param3: number,
        param4: number,
        param5: android.os.Handler
      ): android.bluetooth.BluetoothGatt;
    }
  }
}

declare namespace android {
  namespace bluetooth {
    interface BluetoothAdapter {
      startLeScan(param0: native.Array<javautilUUID>, param1: android.bluetooth.BluetoothAdapter.LeScanCallback): boolean;

      getBluetoothLeScanner(): android.bluetooth.le.BluetoothLeScanner;

      startLeScan(param0: android.bluetooth.BluetoothAdapter.LeScanCallback): boolean;

      getScanMode(): number;
      isLeExtendedAdvertisingSupported(): boolean;

      stopLeScan(param0: android.bluetooth.BluetoothAdapter.LeScanCallback): void;
    }
    namespace BluetoothAdapter {
      export class LeScanCallback extends javalangObject {
        /**
         * Constructs a new instance of the android.bluetooth.BluetoothAdapter$LeScanCallback interface with the provided implementation.
         */
        public constructor(implementation: {
          onLeScan(param0: android.bluetooth.BluetoothDevice, param1: number, param2: native.Array<number>): void;
        });
        public onLeScan(param0: android.bluetooth.BluetoothDevice, param1: number, param2: native.Array<number>): void;
      }
    }
  }
}

declare namespace android {
  export class Manifest extends javalangObject {
    public constructor();
  }
  export namespace Manifest {
    export class permission extends javalangObject {
      public static ACCESS_CHECKIN_PROPERTIES: string;
      public static ACCESS_COARSE_LOCATION: string;
      public static ACCESS_FINE_LOCATION: string;
      public static ACCESS_LOCATION_EXTRA_COMMANDS: string;
      public static ACCESS_NETWORK_STATE: string;
      public static ACCESS_NOTIFICATION_POLICY: string;
      public static ACCESS_WIFI_STATE: string;
      public static ACCOUNT_MANAGER: string;
      public static ADD_VOICEMAIL: string;
      public static ANSWER_PHONE_CALLS: string;
      public static BATTERY_STATS: string;
      public static BIND_ACCESSIBILITY_SERVICE: string;
      public static BIND_APPWIDGET: string;
      public static BIND_AUTOFILL_SERVICE: string;
      public static BIND_CARRIER_MESSAGING_SERVICE: string;
      public static BIND_CARRIER_SERVICES: string;
      public static BIND_CHOOSER_TARGET_SERVICE: string;
      public static BIND_CONDITION_PROVIDER_SERVICE: string;
      public static BIND_DEVICE_ADMIN: string;
      public static BIND_DREAM_SERVICE: string;
      public static BIND_INCALL_SERVICE: string;
      public static BIND_INPUT_METHOD: string;
      public static BIND_MIDI_DEVICE_SERVICE: string;
      public static BIND_NFC_SERVICE: string;
      public static BIND_NOTIFICATION_LISTENER_SERVICE: string;
      public static BIND_PRINT_SERVICE: string;
      public static BIND_QUICK_SETTINGS_TILE: string;
      public static BIND_REMOTEVIEWS: string;
      public static BIND_SCREENING_SERVICE: string;
      public static BIND_TELECOM_CONNECTION_SERVICE: string;
      public static BIND_TEXT_SERVICE: string;
      public static BIND_TV_INPUT: string;
      public static BIND_VISUAL_VOICEMAIL_SERVICE: string;
      public static BIND_VOICE_INTERACTION: string;
      public static BIND_VPN_SERVICE: string;
      public static BIND_VR_LISTENER_SERVICE: string;
      public static BIND_WALLPAPER: string;
      public static BLUETOOTH: string;
      public static BLUETOOTH_ADMIN: string;
      public static BLUETOOTH_PRIVILEGED: string;
      public static BODY_SENSORS: string;
      public static BROADCAST_PACKAGE_REMOVED: string;
      public static BROADCAST_SMS: string;
      public static BROADCAST_STICKY: string;
      public static BROADCAST_WAP_PUSH: string;
      public static CALL_PHONE: string;
      public static CALL_PRIVILEGED: string;
      public static CAMERA: string;
      public static CAPTURE_AUDIO_OUTPUT: string;
      public static CAPTURE_SECURE_VIDEO_OUTPUT: string;
      public static CAPTURE_VIDEO_OUTPUT: string;
      public static CHANGE_COMPONENT_ENABLED_STATE: string;
      public static CHANGE_CONFIGURATION: string;
      public static CHANGE_NETWORK_STATE: string;
      public static CHANGE_WIFI_MULTICAST_STATE: string;
      public static CHANGE_WIFI_STATE: string;
      public static CLEAR_APP_CACHE: string;
      public static CONTROL_LOCATION_UPDATES: string;
      public static DELETE_CACHE_FILES: string;
      public static DELETE_PACKAGES: string;
      public static DIAGNOSTIC: string;
      public static DISABLE_KEYGUARD: string;
      public static DUMP: string;
      public static EXPAND_STATUS_BAR: string;
      public static FACTORY_TEST: string;
      public static GET_ACCOUNTS: string;
      public static GET_ACCOUNTS_PRIVILEGED: string;
      public static GET_PACKAGE_SIZE: string;
      public static GET_TASKS: string;
      public static GLOBAL_SEARCH: string;
      public static INSTALL_LOCATION_PROVIDER: string;
      public static INSTALL_PACKAGES: string;
      public static INSTALL_SHORTCUT: string;
      public static INSTANT_APP_FOREGROUND_SERVICE: string;
      public static INTERNET: string;
      public static KILL_BACKGROUND_PROCESSES: string;
      public static LOCATION_HARDWARE: string;
      public static MANAGE_DOCUMENTS: string;
      public static MANAGE_OWN_CALLS: string;
      public static MASTER_CLEAR: string;
      public static MEDIA_CONTENT_CONTROL: string;
      public static MODIFY_AUDIO_SETTINGS: string;
      public static MODIFY_PHONE_STATE: string;
      public static MOUNT_FORMAT_FILESYSTEMS: string;
      public static MOUNT_UNMOUNT_FILESYSTEMS: string;
      public static NFC: string;
      public static PACKAGE_USAGE_STATS: string;
      public static PERSISTENT_ACTIVITY: string;
      public static PROCESS_OUTGOING_CALLS: string;
      public static READ_CALENDAR: string;
      public static READ_CALL_LOG: string;
      public static READ_CONTACTS: string;
      public static READ_EXTERNAL_STORAGE: string;
      public static READ_FRAME_BUFFER: string;
      public static READ_INPUT_STATE: string;
      public static READ_LOGS: string;
      public static READ_PHONE_NUMBERS: string;
      public static READ_PHONE_STATE: string;
      public static READ_SMS: string;
      public static READ_SYNC_SETTINGS: string;
      public static READ_SYNC_STATS: string;
      public static READ_VOICEMAIL: string;
      public static REBOOT: string;
      public static RECEIVE_BOOT_COMPLETED: string;
      public static RECEIVE_MMS: string;
      public static RECEIVE_SMS: string;
      public static RECEIVE_WAP_PUSH: string;
      public static RECORD_AUDIO: string;
      public static REORDER_TASKS: string;
      public static REQUEST_COMPANION_RUN_IN_BACKGROUND: string;
      public static REQUEST_COMPANION_USE_DATA_IN_BACKGROUND: string;
      public static REQUEST_DELETE_PACKAGES: string;
      public static REQUEST_IGNORE_BATTERY_OPTIMIZATIONS: string;
      public static REQUEST_INSTALL_PACKAGES: string;
      public static RESTART_PACKAGES: string;
      public static SEND_RESPOND_VIA_MESSAGE: string;
      public static SEND_SMS: string;
      public static SET_ALARM: string;
      public static SET_ALWAYS_FINISH: string;
      public static SET_ANIMATION_SCALE: string;
      public static SET_DEBUG_APP: string;
      public static SET_PREFERRED_APPLICATIONS: string;
      public static SET_PROCESS_LIMIT: string;
      public static SET_TIME: string;
      public static SET_TIME_ZONE: string;
      public static SET_WALLPAPER: string;
      public static SET_WALLPAPER_HINTS: string;
      public static SIGNAL_PERSISTENT_PROCESSES: string;
      public static STATUS_BAR: string;
      public static SYSTEM_ALERT_WINDOW: string;
      public static TRANSMIT_IR: string;
      public static UNINSTALL_SHORTCUT: string;
      public static UPDATE_DEVICE_STATS: string;
      public static USE_FINGERPRINT: string;
      public static USE_SIP: string;
      public static VIBRATE: string;
      public static WAKE_LOCK: string;
      public static WRITE_APN_SETTINGS: string;
      public static WRITE_CALENDAR: string;
      public static WRITE_CALL_LOG: string;
      public static WRITE_CONTACTS: string;
      public static WRITE_EXTERNAL_STORAGE: string;
      public static WRITE_GSERVICES: string;
      public static WRITE_SECURE_SETTINGS: string;
      public static WRITE_SETTINGS: string;
      public static WRITE_SYNC_SETTINGS: string;
      public static WRITE_VOICEMAIL: string;
      public constructor();
    }
    export class permission_group extends javalangObject {
      public static CALENDAR: string;
      public static CAMERA: string;
      public static CONTACTS: string;
      public static LOCATION: string;
      public static MICROPHONE: string;
      public static PHONE: string;
      public static SENSORS: string;
      public static SMS: string;
      public static STORAGE: string;
      public constructor();
    }
  }
}

declare namespace android {
  namespace os {
    namespace Build {
      namespace VERSION_CODES {
        var LOLLIPOP: number;
        var LOLLIPOP_MR1: number;
        var M: number;
        var N: number;
        var N_MR1: number;
        var O: number;
        var O_MR1: number;
      }
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export namespace Device {
      export class Major extends javalangObject {
        public static AUDIO_VIDEO: number;
        public static COMPUTER: number;
        public static HEALTH: number;
        public static IMAGING: number;
        public static MISC: number;
        public static NETWORKING: number;
        public static PERIPHERAL: number;
        public static PHONE: number;
        public static TOY: number;
        public static UNCATEGORIZED: number;
        public static WEARABLE: number;
        public constructor();
      }
      export class Service extends javalangObject {
        public static AUDIO: number;
        public static CAPTURE: number;
        public static INFORMATION: number;
        public static LIMITED_DISCOVERABILITY: number;
        public static NETWORKING: number;
        public static OBJECT_TRANSFER: number;
        public static POSITIONING: number;
        public static RENDER: number;
        public static TELEPHONY: number;
        public constructor();
      }
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export class BluetoothGatt extends javalangObject implements android.bluetooth.BluetoothProfile {
      public static CONNECTION_PRIORITY_BALANCED: number;
      public static CONNECTION_PRIORITY_HIGH: number;
      public static CONNECTION_PRIORITY_LOW_POWER: number;
      public static GATT_CONNECTION_CONGESTED: number;
      public static GATT_FAILURE: number;
      public static GATT_INSUFFICIENT_AUTHENTICATION: number;
      public static GATT_INSUFFICIENT_ENCRYPTION: number;
      public static GATT_INVALID_ATTRIBUTE_LENGTH: number;
      public static GATT_INVALID_OFFSET: number;
      public static GATT_READ_NOT_PERMITTED: number;
      public static GATT_REQUEST_NOT_SUPPORTED: number;
      public static GATT_SUCCESS: number;
      public static GATT_WRITE_NOT_PERMITTED: number;
      public getConnectedDevices(): javautilList<any>;
      public connect(): boolean;
      public getDevicesMatchingConnectionStates(param0: native.Array<number>): javautilList<any>;
      public executeReliableWrite(): boolean;
      public readPhy(): void;
      public setCharacteristicNotification(param0: android.bluetooth.BluetoothGattCharacteristic, param1: boolean): boolean;
      public getServices(): javautilList<any>;
      public readRemoteRssi(): boolean;
      public getService(param0: javautilUUID): android.bluetooth.BluetoothGattService;
      public beginReliableWrite(): boolean;
      public writeDescriptor(param0: android.bluetooth.BluetoothGattDescriptor): boolean;
      public readCharacteristic(param0: android.bluetooth.BluetoothGattCharacteristic): boolean;
      public requestConnectionPriority(param0: number): boolean;
      public getConnectionState(param0: android.bluetooth.BluetoothDevice): number;
      public getDevice(): android.bluetooth.BluetoothDevice;
      public readDescriptor(param0: android.bluetooth.BluetoothGattDescriptor): boolean;
      public close(): void;
      public abortReliableWrite(): void;
      public abortReliableWrite(param0: android.bluetooth.BluetoothDevice): void;
      public setPreferredPhy(param0: number, param1: number, param2: number): void;
      public writeCharacteristic(param0: android.bluetooth.BluetoothGattCharacteristic): boolean;
      public disconnect(): void;
      public discoverServices(): boolean;
      public requestMtu(param0: number): boolean;
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export abstract class BluetoothGattCallback extends javalangObject {
      public onDescriptorRead(
        param0: android.bluetooth.BluetoothGatt,
        param1: android.bluetooth.BluetoothGattDescriptor,
        param2: number
      ): void;
      public onServicesDiscovered(param0: android.bluetooth.BluetoothGatt, param1: number): void;
      public onCharacteristicWrite(
        param0: android.bluetooth.BluetoothGatt,
        param1: android.bluetooth.BluetoothGattCharacteristic,
        param2: number
      ): void;
      public constructor();
      public onPhyRead(param0: android.bluetooth.BluetoothGatt, param1: number, param2: number, param3: number): void;
      public onReadRemoteRssi(param0: android.bluetooth.BluetoothGatt, param1: number, param2: number): void;
      public onMtuChanged(param0: android.bluetooth.BluetoothGatt, param1: number, param2: number): void;
      public onPhyUpdate(param0: android.bluetooth.BluetoothGatt, param1: number, param2: number, param3: number): void;
      public onConnectionStateChange(param0: android.bluetooth.BluetoothGatt, param1: number, param2: number): void;
      public onReliableWriteCompleted(param0: android.bluetooth.BluetoothGatt, param1: number): void;
      public onDescriptorWrite(
        param0: android.bluetooth.BluetoothGatt,
        param1: android.bluetooth.BluetoothGattDescriptor,
        param2: number
      ): void;
      public onCharacteristicRead(
        param0: android.bluetooth.BluetoothGatt,
        param1: android.bluetooth.BluetoothGattCharacteristic,
        param2: number
      ): void;
      public onCharacteristicChanged(param0: android.bluetooth.BluetoothGatt, param1: android.bluetooth.BluetoothGattCharacteristic): void;
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export class BluetoothGattCharacteristic extends javalangObject implements android.os.Parcelable {
      public static CREATOR: android.os.Parcelable.Creator<any>;
      public static FORMAT_FLOAT: number;
      public static FORMAT_SFLOAT: number;
      public static FORMAT_SINT16: number;
      public static FORMAT_SINT32: number;
      public static FORMAT_SINT8: number;
      public static FORMAT_UINT16: number;
      public static FORMAT_UINT32: number;
      public static FORMAT_UINT8: number;
      public static PERMISSION_READ: number;
      public static PERMISSION_READ_ENCRYPTED: number;
      public static PERMISSION_READ_ENCRYPTED_MITM: number;
      public static PERMISSION_WRITE: number;
      public static PERMISSION_WRITE_ENCRYPTED: number;
      public static PERMISSION_WRITE_ENCRYPTED_MITM: number;
      public static PERMISSION_WRITE_SIGNED: number;
      public static PERMISSION_WRITE_SIGNED_MITM: number;
      public static PROPERTY_BROADCAST: number;
      public static PROPERTY_EXTENDED_PROPS: number;
      public static PROPERTY_INDICATE: number;
      public static PROPERTY_NOTIFY: number;
      public static PROPERTY_READ: number;
      public static PROPERTY_SIGNED_WRITE: number;
      public static PROPERTY_WRITE: number;
      public static PROPERTY_WRITE_NO_RESPONSE: number;
      public static WRITE_TYPE_DEFAULT: number;
      public static WRITE_TYPE_NO_RESPONSE: number;
      public static WRITE_TYPE_SIGNED: number;
      public mDescriptors: javautilList<any>;
      public setValue(param0: string): boolean;
      public getIntValue(param0: number, param1: number): javalangInteger;
      public getStringValue(param0: number): string;
      public addDescriptor(param0: android.bluetooth.BluetoothGattDescriptor): boolean;
      public getValue(): native.Array<number>;
      public setValue(param0: number, param1: number, param2: number): boolean;
      public getDescriptor(param0: javautilUUID): android.bluetooth.BluetoothGattDescriptor;
      public constructor(param0: javautilUUID, param1: number, param2: number);
      public getDescriptors(): javautilList<any>;
      public getService(): android.bluetooth.BluetoothGattService;
      public getProperties(): number;
      public getPermissions(): number;
      public getFloatValue(param0: number, param1: number): javalangFloat;
      public getInstanceId(): number;
      public setValue(param0: number, param1: number, param2: number, param3: number): boolean;
      public describeContents(): number;
      public writeToParcel(param0: android.os.Parcel, param1: number): void;
      public setValue(param0: native.Array<number>): boolean;
      public getUuid(): javautilUUID;
      public getWriteType(): number;
      public setWriteType(param0: number): void;
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export class BluetoothGattDescriptor extends javalangObject implements android.os.Parcelable {
      public static CREATOR: android.os.Parcelable.Creator<any>;
      public static DISABLE_NOTIFICATION_VALUE: native.Array<number>;
      public static ENABLE_INDICATION_VALUE: native.Array<number>;
      public static ENABLE_NOTIFICATION_VALUE: native.Array<number>;
      public static PERMISSION_READ: number;
      public static PERMISSION_READ_ENCRYPTED: number;
      public static PERMISSION_READ_ENCRYPTED_MITM: number;
      public static PERMISSION_WRITE: number;
      public static PERMISSION_WRITE_ENCRYPTED: number;
      public static PERMISSION_WRITE_ENCRYPTED_MITM: number;
      public static PERMISSION_WRITE_SIGNED: number;
      public static PERMISSION_WRITE_SIGNED_MITM: number;
      public constructor(param0: javautilUUID, param1: number);
      public getPermissions(): number;
      public getCharacteristic(): android.bluetooth.BluetoothGattCharacteristic;
      public getValue(): native.Array<number>;
      public describeContents(): number;
      public writeToParcel(param0: android.os.Parcel, param1: number): void;
      public setValue(param0: native.Array<number>): boolean;
      public getUuid(): javautilUUID;
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export class BluetoothGattServer extends javalangObject implements android.bluetooth.BluetoothProfile {
      public getConnectedDevices(): javautilList<any>;
      public getDevicesMatchingConnectionStates(param0: native.Array<number>): javautilList<any>;
      public cancelConnection(param0: android.bluetooth.BluetoothDevice): void;
      public removeService(param0: android.bluetooth.BluetoothGattService): boolean;
      public clearServices(): void;
      public readPhy(param0: android.bluetooth.BluetoothDevice): void;
      public getServices(): javautilList<any>;
      public sendResponse(
        param0: android.bluetooth.BluetoothDevice,
        param1: number,
        param2: number,
        param3: number,
        param4: native.Array<number>
      ): boolean;
      public getService(param0: javautilUUID): android.bluetooth.BluetoothGattService;
      public notifyCharacteristicChanged(
        param0: android.bluetooth.BluetoothDevice,
        param1: android.bluetooth.BluetoothGattCharacteristic,
        param2: boolean
      ): boolean;
      public addService(param0: android.bluetooth.BluetoothGattService): boolean;
      public setPreferredPhy(param0: android.bluetooth.BluetoothDevice, param1: number, param2: number, param3: number): void;
      public getConnectionState(param0: android.bluetooth.BluetoothDevice): number;
      public connect(param0: android.bluetooth.BluetoothDevice, param1: boolean): boolean;
      public close(): void;
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export abstract class BluetoothGattServerCallback extends javalangObject {
      public onPhyUpdate(param0: android.bluetooth.BluetoothDevice, param1: number, param2: number, param3: number): void;
      public onCharacteristicReadRequest(
        param0: android.bluetooth.BluetoothDevice,
        param1: number,
        param2: number,
        param3: android.bluetooth.BluetoothGattCharacteristic
      ): void;
      public onCharacteristicWriteRequest(
        param0: android.bluetooth.BluetoothDevice,
        param1: number,
        param2: android.bluetooth.BluetoothGattCharacteristic,
        param3: boolean,
        param4: boolean,
        param5: number,
        param6: native.Array<number>
      ): void;
      public onDescriptorWriteRequest(
        param0: android.bluetooth.BluetoothDevice,
        param1: number,
        param2: android.bluetooth.BluetoothGattDescriptor,
        param3: boolean,
        param4: boolean,
        param5: number,
        param6: native.Array<number>
      ): void;
      public onMtuChanged(param0: android.bluetooth.BluetoothDevice, param1: number): void;
      public onServiceAdded(param0: number, param1: android.bluetooth.BluetoothGattService): void;
      public constructor();
      public onNotificationSent(param0: android.bluetooth.BluetoothDevice, param1: number): void;
      public onPhyRead(param0: android.bluetooth.BluetoothDevice, param1: number, param2: number, param3: number): void;
      public onExecuteWrite(param0: android.bluetooth.BluetoothDevice, param1: number, param2: boolean): void;
      public onConnectionStateChange(param0: android.bluetooth.BluetoothDevice, param1: number, param2: number): void;
      public onDescriptorReadRequest(
        param0: android.bluetooth.BluetoothDevice,
        param1: number,
        param2: number,
        param3: android.bluetooth.BluetoothGattDescriptor
      ): void;
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export class BluetoothGattService extends javalangObject implements android.os.Parcelable {
      public static CREATOR: android.os.Parcelable.Creator<any>;
      public static SERVICE_TYPE_PRIMARY: number;
      public static SERVICE_TYPE_SECONDARY: number;
      public mCharacteristics: javautilList<any>;
      public mIncludedServices: javautilList<any>;
      public constructor(param0: javautilUUID, param1: number);
      public getType(): number;
      public getIncludedServices(): javautilList<any>;
      public addService(param0: android.bluetooth.BluetoothGattService): boolean;
      public getInstanceId(): number;
      public getCharacteristic(param0: javautilUUID): android.bluetooth.BluetoothGattCharacteristic;
      public describeContents(): number;
      public writeToParcel(param0: android.os.Parcel, param1: number): void;
      public getCharacteristics(): javautilList<any>;
      public addCharacteristic(param0: android.bluetooth.BluetoothGattCharacteristic): boolean;
      public getUuid(): javautilUUID;
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export class BluetoothManager extends javalangObject {
      public getConnectedDevices(param0: number): javautilList<any>;
      public getDevicesMatchingConnectionStates(param0: number, param1: native.Array<number>): javautilList<any>;
      public getAdapter(): android.bluetooth.BluetoothAdapter;
      public openGattServer(
        param0: android.content.Context,
        param1: android.bluetooth.BluetoothGattServerCallback
      ): android.bluetooth.BluetoothGattServer;
      public getConnectionState(param0: android.bluetooth.BluetoothDevice, param1: number): number;
    }
  }
}

import javaioCloseable = java.io.Closeable;

import javaioOutputStream = java.io.OutputStream;

declare namespace android {
  export namespace bluetooth {
    export namespace le {
      export abstract class AdvertiseCallback extends javalangObject {
        public static ADVERTISE_FAILED_ALREADY_STARTED: number;
        public static ADVERTISE_FAILED_DATA_TOO_LARGE: number;
        public static ADVERTISE_FAILED_FEATURE_UNSUPPORTED: number;
        public static ADVERTISE_FAILED_INTERNAL_ERROR: number;
        public static ADVERTISE_FAILED_TOO_MANY_ADVERTISERS: number;
        public onStartFailure(param0: number): void;
        public onStartSuccess(param0: android.bluetooth.le.AdvertiseSettings): void;
        public constructor();
      }
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export namespace le {
      export class AdvertiseData extends javalangObject implements android.os.Parcelable {
        public static CREATOR: android.os.Parcelable.Creator<any>;
        public writeToParcel(param0: android.os.Parcel, param1: number): void;
        public getServiceData(): javautilMap<String, any>;
        public describeContents(): number;
        public getIncludeDeviceName(): boolean;
        public getIncludeTxPowerLevel(): boolean;
        public toString(): string;
        public getServiceUuids(): javautilList<any>;
        public getManufacturerSpecificData(): android.util.SparseArray<any>;
      }
      export namespace AdvertiseData {
        export class Builder extends javalangObject {
          public constructor();
          public setIncludeDeviceName(param0: boolean): android.bluetooth.le.AdvertiseData.Builder;
          public addServiceData(param0: android.os.ParcelUuid, param1: native.Array<number>): android.bluetooth.le.AdvertiseData.Builder;
          public addServiceUuid(param0: android.os.ParcelUuid): android.bluetooth.le.AdvertiseData.Builder;
          public addManufacturerData(param0: number, param1: native.Array<number>): android.bluetooth.le.AdvertiseData.Builder;
          public build(): android.bluetooth.le.AdvertiseData;
          public setIncludeTxPowerLevel(param0: boolean): android.bluetooth.le.AdvertiseData.Builder;
        }
      }
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export namespace le {
      export class AdvertiseSettings extends javalangObject implements android.os.Parcelable {
        public static ADVERTISE_MODE_BALANCED: number;
        public static ADVERTISE_MODE_LOW_LATENCY: number;
        public static ADVERTISE_MODE_LOW_POWER: number;
        public static ADVERTISE_TX_POWER_HIGH: number;
        public static ADVERTISE_TX_POWER_LOW: number;
        public static ADVERTISE_TX_POWER_MEDIUM: number;
        public static ADVERTISE_TX_POWER_ULTRA_LOW: number;
        public static CREATOR: android.os.Parcelable.Creator<any>;
        public getMode(): number;
        public getTxPowerLevel(): number;
        public isConnectable(): boolean;
        public writeToParcel(param0: android.os.Parcel, param1: number): void;
        public describeContents(): number;
        public getTimeout(): number;
        public toString(): string;
      }
      export namespace AdvertiseSettings {
        export class Builder extends javalangObject {
          public setTimeout(param0: number): android.bluetooth.le.AdvertiseSettings.Builder;
          public setAdvertiseMode(param0: number): android.bluetooth.le.AdvertiseSettings.Builder;
          public constructor();
          public build(): android.bluetooth.le.AdvertiseSettings;
          public setConnectable(param0: boolean): android.bluetooth.le.AdvertiseSettings.Builder;
          public setTxPowerLevel(param0: number): android.bluetooth.le.AdvertiseSettings.Builder;
        }
      }
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export namespace le {
      export class AdvertisingSet extends javalangObject {
        public enableAdvertising(param0: boolean, param1: number, param2: number): void;
        public setScanResponseData(param0: android.bluetooth.le.AdvertiseData): void;
        public setPeriodicAdvertisingData(param0: android.bluetooth.le.AdvertiseData): void;
        public setAdvertisingData(param0: android.bluetooth.le.AdvertiseData): void;
        public setAdvertisingParameters(param0: android.bluetooth.le.AdvertisingSetParameters): void;
        public setPeriodicAdvertisingParameters(param0: android.bluetooth.le.PeriodicAdvertisingParameters): void;
        public setPeriodicAdvertisingEnabled(param0: boolean): void;
      }
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export namespace le {
      export abstract class AdvertisingSetCallback extends javalangObject {
        public static ADVERTISE_FAILED_ALREADY_STARTED: number;
        public static ADVERTISE_FAILED_DATA_TOO_LARGE: number;
        public static ADVERTISE_FAILED_FEATURE_UNSUPPORTED: number;
        public static ADVERTISE_FAILED_INTERNAL_ERROR: number;
        public static ADVERTISE_FAILED_TOO_MANY_ADVERTISERS: number;
        public static ADVERTISE_SUCCESS: number;
        public onAdvertisingEnabled(param0: android.bluetooth.le.AdvertisingSet, param1: boolean, param2: number): void;
        public onAdvertisingParametersUpdated(param0: android.bluetooth.le.AdvertisingSet, param1: number, param2: number): void;
        public onScanResponseDataSet(param0: android.bluetooth.le.AdvertisingSet, param1: number): void;
        public onPeriodicAdvertisingEnabled(param0: android.bluetooth.le.AdvertisingSet, param1: boolean, param2: number): void;
        public onAdvertisingSetStopped(param0: android.bluetooth.le.AdvertisingSet): void;
        public onAdvertisingDataSet(param0: android.bluetooth.le.AdvertisingSet, param1: number): void;
        public onPeriodicAdvertisingDataSet(param0: android.bluetooth.le.AdvertisingSet, param1: number): void;
        public onAdvertisingSetStarted(param0: android.bluetooth.le.AdvertisingSet, param1: number, param2: number): void;
        public onPeriodicAdvertisingParametersUpdated(param0: android.bluetooth.le.AdvertisingSet, param1: number): void;
        public constructor();
      }
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export namespace le {
      export class AdvertisingSetParameters extends javalangObject implements android.os.Parcelable {
        public static CREATOR: android.os.Parcelable.Creator<any>;
        public static INTERVAL_HIGH: number;
        public static INTERVAL_LOW: number;
        public static INTERVAL_MAX: number;
        public static INTERVAL_MEDIUM: number;
        public static INTERVAL_MIN: number;
        public static TX_POWER_HIGH: number;
        public static TX_POWER_LOW: number;
        public static TX_POWER_MAX: number;
        public static TX_POWER_MEDIUM: number;
        public static TX_POWER_MIN: number;
        public static TX_POWER_ULTRA_LOW: number;
        public getSecondaryPhy(): number;
        public getTxPowerLevel(): number;
        public isConnectable(): boolean;
        public getPrimaryPhy(): number;
        public isLegacy(): boolean;
        public isAnonymous(): boolean;
        public includeTxPower(): boolean;
        public writeToParcel(param0: android.os.Parcel, param1: number): void;
        public getInterval(): number;
        public describeContents(): number;
        public isScannable(): boolean;
        public toString(): string;
      }
      export namespace AdvertisingSetParameters {
        export class Builder extends javalangObject {
          public setTxPowerLevel(param0: number): android.bluetooth.le.AdvertisingSetParameters.Builder;
          public setScannable(param0: boolean): android.bluetooth.le.AdvertisingSetParameters.Builder;
          public setIncludeTxPower(param0: boolean): android.bluetooth.le.AdvertisingSetParameters.Builder;
          public setSecondaryPhy(param0: number): android.bluetooth.le.AdvertisingSetParameters.Builder;
          public constructor();
          public setConnectable(param0: boolean): android.bluetooth.le.AdvertisingSetParameters.Builder;
          public setAnonymous(param0: boolean): android.bluetooth.le.AdvertisingSetParameters.Builder;
          public setPrimaryPhy(param0: number): android.bluetooth.le.AdvertisingSetParameters.Builder;
          public setInterval(param0: number): android.bluetooth.le.AdvertisingSetParameters.Builder;
          public setLegacyMode(param0: boolean): android.bluetooth.le.AdvertisingSetParameters.Builder;
          public build(): android.bluetooth.le.AdvertisingSetParameters;
        }
      }
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export namespace le {
      export class BluetoothLeAdvertiser extends javalangObject {
        public startAdvertisingSet(
          param0: android.bluetooth.le.AdvertisingSetParameters,
          param1: android.bluetooth.le.AdvertiseData,
          param2: android.bluetooth.le.AdvertiseData,
          param3: android.bluetooth.le.PeriodicAdvertisingParameters,
          param4: android.bluetooth.le.AdvertiseData,
          param5: number,
          param6: number,
          param7: android.bluetooth.le.AdvertisingSetCallback,
          param8: android.os.Handler
        ): void;
        public startAdvertisingSet(
          param0: android.bluetooth.le.AdvertisingSetParameters,
          param1: android.bluetooth.le.AdvertiseData,
          param2: android.bluetooth.le.AdvertiseData,
          param3: android.bluetooth.le.PeriodicAdvertisingParameters,
          param4: android.bluetooth.le.AdvertiseData,
          param5: number,
          param6: number,
          param7: android.bluetooth.le.AdvertisingSetCallback
        ): void;
        public stopAdvertisingSet(param0: android.bluetooth.le.AdvertisingSetCallback): void;
        public stopAdvertising(param0: android.bluetooth.le.AdvertiseCallback): void;
        public startAdvertising(
          param0: android.bluetooth.le.AdvertiseSettings,
          param1: android.bluetooth.le.AdvertiseData,
          param2: android.bluetooth.le.AdvertiseCallback
        ): void;
        public startAdvertisingSet(
          param0: android.bluetooth.le.AdvertisingSetParameters,
          param1: android.bluetooth.le.AdvertiseData,
          param2: android.bluetooth.le.AdvertiseData,
          param3: android.bluetooth.le.PeriodicAdvertisingParameters,
          param4: android.bluetooth.le.AdvertiseData,
          param5: android.bluetooth.le.AdvertisingSetCallback
        ): void;
        public startAdvertising(
          param0: android.bluetooth.le.AdvertiseSettings,
          param1: android.bluetooth.le.AdvertiseData,
          param2: android.bluetooth.le.AdvertiseData,
          param3: android.bluetooth.le.AdvertiseCallback
        ): void;
        public startAdvertisingSet(
          param0: android.bluetooth.le.AdvertisingSetParameters,
          param1: android.bluetooth.le.AdvertiseData,
          param2: android.bluetooth.le.AdvertiseData,
          param3: android.bluetooth.le.PeriodicAdvertisingParameters,
          param4: android.bluetooth.le.AdvertiseData,
          param5: android.bluetooth.le.AdvertisingSetCallback,
          param6: android.os.Handler
        ): void;
      }
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export namespace le {
      export class BluetoothLeScanner extends javalangObject {
        public static EXTRA_CALLBACK_TYPE: string;
        public static EXTRA_ERROR_CODE: string;
        public static EXTRA_LIST_SCAN_RESULT: string;
        public startScan(
          param0: javautilList<any>,
          param1: android.bluetooth.le.ScanSettings,
          param2: android.bluetooth.le.ScanCallback
        ): void;
        public stopScan(param0: android.bluetooth.le.ScanCallback): void;
        public flushPendingScanResults(param0: android.bluetooth.le.ScanCallback): void;
        public startScan(param0: javautilList<any>, param1: android.bluetooth.le.ScanSettings, param2: android.app.PendingIntent): number;
        public startScan(param0: android.bluetooth.le.ScanCallback): void;
        public stopScan(param0: android.app.PendingIntent): void;
      }
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export namespace le {
      export class PeriodicAdvertisingParameters extends javalangObject implements android.os.Parcelable {
        public static CREATOR: android.os.Parcelable.Creator<any>;
        public writeToParcel(param0: android.os.Parcel, param1: number): void;
        public getInterval(): number;
        public describeContents(): number;
        public getIncludeTxPower(): boolean;
      }
      export namespace PeriodicAdvertisingParameters {
        export class Builder extends javalangObject {
          public setIncludeTxPower(param0: boolean): android.bluetooth.le.PeriodicAdvertisingParameters.Builder;
          public constructor();
          public build(): android.bluetooth.le.PeriodicAdvertisingParameters;
          public setInterval(param0: number): android.bluetooth.le.PeriodicAdvertisingParameters.Builder;
        }
      }
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export namespace le {
      export abstract class ScanCallback extends javalangObject {
        public static SCAN_FAILED_ALREADY_STARTED: number;
        public static SCAN_FAILED_APPLICATION_REGISTRATION_FAILED: number;
        public static SCAN_FAILED_FEATURE_UNSUPPORTED: number;
        public static SCAN_FAILED_INTERNAL_ERROR: number;
        public onBatchScanResults(param0: javautilList<any>): void;
        public onScanFailed(param0: number): void;
        public constructor();
        public onScanResult(param0: number, param1: android.bluetooth.le.ScanResult): void;
      }
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export namespace le {
      export class ScanFilter extends javalangObject implements android.os.Parcelable {
        public static CREATOR: android.os.Parcelable.Creator<any>;
        public getServiceDataUuid(): android.os.ParcelUuid;
        public getDeviceName(): string;
        public writeToParcel(param0: android.os.Parcel, param1: number): void;
        public getServiceDataMask(): native.Array<number>;
        public getManufacturerId(): number;
        public matches(param0: android.bluetooth.le.ScanResult): boolean;
        public getDeviceAddress(): string;
        public getServiceData(): native.Array<number>;
        public getServiceUuid(): android.os.ParcelUuid;
        public toString(): string;
        public getManufacturerDataMask(): native.Array<number>;
        public equals(param0: javalangObject): boolean;
        public hashCode(): number;
        public getManufacturerData(): native.Array<number>;
        public describeContents(): number;
        public getServiceUuidMask(): android.os.ParcelUuid;
      }
      export namespace ScanFilter {
        export class Builder extends javalangObject {
          public setDeviceName(param0: string): android.bluetooth.le.ScanFilter.Builder;
          public constructor();
          public build(): android.bluetooth.le.ScanFilter;
          public setDeviceAddress(param0: string): android.bluetooth.le.ScanFilter.Builder;
          public setServiceUuid(param0: android.os.ParcelUuid): android.bluetooth.le.ScanFilter.Builder;
          public setManufacturerData(param0: number, param1: native.Array<number>): android.bluetooth.le.ScanFilter.Builder;
          public setServiceData(param0: android.os.ParcelUuid, param1: native.Array<number>): android.bluetooth.le.ScanFilter.Builder;
          public setServiceData(
            param0: android.os.ParcelUuid,
            param1: native.Array<number>,
            param2: native.Array<number>
          ): android.bluetooth.le.ScanFilter.Builder;
          public setServiceUuid(param0: android.os.ParcelUuid, param1: android.os.ParcelUuid): android.bluetooth.le.ScanFilter.Builder;
          public setManufacturerData(
            param0: number,
            param1: native.Array<number>,
            param2: native.Array<number>
          ): android.bluetooth.le.ScanFilter.Builder;
        }
      }
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export namespace le {
      export class ScanRecord extends javalangObject {
        public getTxPowerLevel(): number;
        public getDeviceName(): string;
        public getAdvertiseFlags(): number;
        public getServiceData(): javautilMap<any, any>;
        public getServiceData(param0: android.os.ParcelUuid): native.Array<number>;
        public getManufacturerSpecificData(param0: number): native.Array<number>;
        public toString(): string;
        public getServiceUuids(): javautilList<any>;
        public getManufacturerSpecificData(): android.util.SparseArray<any>;
        public getBytes(): native.Array<number>;
      }
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export namespace le {
      export class ScanResult extends javalangObject implements android.os.Parcelable {
        public static CREATOR: android.os.Parcelable.Creator<any>;
        public static DATA_COMPLETE: number;
        public static DATA_TRUNCATED: number;
        public static PERIODIC_INTERVAL_NOT_PRESENT: number;
        public static PHY_UNUSED: number;
        public static SID_NOT_PRESENT: number;
        public static TX_POWER_NOT_PRESENT: number;
        public getSecondaryPhy(): number;
        public isConnectable(): boolean;
        public writeToParcel(param0: android.os.Parcel, param1: number): void;
        public getScanRecord(): android.bluetooth.le.ScanRecord;
        public getRssi(): number;
        public constructor(
          param0: android.bluetooth.BluetoothDevice,
          param1: number,
          param2: number,
          param3: number,
          param4: number,
          param5: number,
          param6: number,
          param7: number,
          param8: android.bluetooth.le.ScanRecord,
          param9: number
        );
        public getDevice(): android.bluetooth.BluetoothDevice;
        public toString(): string;
        public getDataStatus(): number;
        public getTimestampNanos(): number;
        public getTxPower(): number;
        public getPeriodicAdvertisingInterval(): number;
        public getPrimaryPhy(): number;
        public equals(param0: javalangObject): boolean;
        public constructor(
          param0: android.bluetooth.BluetoothDevice,
          param1: android.bluetooth.le.ScanRecord,
          param2: number,
          param3: number
        );
        public isLegacy(): boolean;
        public hashCode(): number;
        public getAdvertisingSid(): number;
        public describeContents(): number;
      }
    }
  }
}

declare namespace android {
  export namespace bluetooth {
    export namespace le {
      export class ScanSettings extends javalangObject implements android.os.Parcelable {
        public static CALLBACK_TYPE_ALL_MATCHES: number;
        public static CALLBACK_TYPE_FIRST_MATCH: number;
        public static CALLBACK_TYPE_MATCH_LOST: number;
        public static CREATOR: android.os.Parcelable.Creator<any>;
        public static MATCH_MODE_AGGRESSIVE: number;
        public static MATCH_MODE_STICKY: number;
        public static MATCH_NUM_FEW_ADVERTISEMENT: number;
        public static MATCH_NUM_MAX_ADVERTISEMENT: number;
        public static MATCH_NUM_ONE_ADVERTISEMENT: number;
        public static PHY_LE_ALL_SUPPORTED: number;
        public static SCAN_MODE_BALANCED: number;
        public static SCAN_MODE_LOW_LATENCY: number;
        public static SCAN_MODE_LOW_POWER: number;
        public static SCAN_MODE_OPPORTUNISTIC: number;
        public getReportDelayMillis(): number;
        public getScanMode(): number;
        public getLegacy(): boolean;
        public writeToParcel(param0: android.os.Parcel, param1: number): void;
        public getScanResultType(): number;
        public describeContents(): number;
        public getPhy(): number;
        public getCallbackType(): number;
      }
      export namespace ScanSettings {
        export class Builder extends javalangObject {
          public setLegacy(param0: boolean): android.bluetooth.le.ScanSettings.Builder;
          public setMatchMode(param0: number): android.bluetooth.le.ScanSettings.Builder;
          public constructor();
          public setReportDelay(param0: number): android.bluetooth.le.ScanSettings.Builder;
          public build(): android.bluetooth.le.ScanSettings;
          public setCallbackType(param0: number): android.bluetooth.le.ScanSettings.Builder;
          public setScanMode(param0: number): android.bluetooth.le.ScanSettings.Builder;
          public setPhy(param0: number): android.bluetooth.le.ScanSettings.Builder;
          public setNumOfMatches(param0: number): android.bluetooth.le.ScanSettings.Builder;
        }
      }
    }
  }
}

declare namespace android {
  export namespace companion {
    export class AssociationRequest extends javalangObject implements android.os.Parcelable {
      public static CREATOR: android.os.Parcelable.Creator<any>;
      public toString(): string;
      public equals(param0: javalangObject): boolean;
      public describeContents(): number;
      public writeToParcel(param0: android.os.Parcel, param1: number): void;
      public hashCode(): number;
    }
    export namespace AssociationRequest {
      export class Builder extends javalangObject {
        public build(): android.companion.AssociationRequest;
        public addDeviceFilter(param0: android.companion.DeviceFilter): android.companion.AssociationRequest.Builder;
        public setSingleDevice(param0: boolean): android.companion.AssociationRequest.Builder;
        public constructor();
      }
    }
  }
}

declare namespace android {
  export namespace companion {
    export class BluetoothDeviceFilter extends javalangObject implements android.companion.DeviceFilter {
      public static CREATOR: android.os.Parcelable.Creator<any>;
      public equals(param0: javalangObject): boolean;
      public describeContents(): number;
      public writeToParcel(param0: android.os.Parcel, param1: number): void;
      public hashCode(): number;
    }
    export namespace BluetoothDeviceFilter {
      export class Builder extends javalangObject {
        public build(): android.companion.BluetoothDeviceFilter;
        public setNamePattern(param0: javautilregexPattern): android.companion.BluetoothDeviceFilter.Builder;
        public setAddress(param0: string): android.companion.BluetoothDeviceFilter.Builder;
        public addServiceUuid(
          param0: android.os.ParcelUuid,
          param1: android.os.ParcelUuid
        ): android.companion.BluetoothDeviceFilter.Builder;
        public constructor();
      }
    }
  }
}

import javanioByteOrder = java.nio.ByteOrder;
declare namespace android {
  export namespace companion {
    export class BluetoothLeDeviceFilter extends javalangObject implements android.companion.DeviceFilter {
      public static CREATOR: android.os.Parcelable.Creator<any>;
      public toString(): string;
      public equals(param0: javalangObject): boolean;
      public describeContents(): number;
      public writeToParcel(param0: android.os.Parcel, param1: number): void;
      public static getRenamePrefixLengthLimit(): number;
      public hashCode(): number;
    }
    export namespace BluetoothLeDeviceFilter {
      export class Builder extends javalangObject {
        public setRawDataFilter(
          param0: native.Array<number>,
          param1: native.Array<number>
        ): android.companion.BluetoothLeDeviceFilter.Builder;
        public setRenameFromBytes(
          param0: string,
          param1: string,
          param2: number,
          param3: number,
          param4: javanioByteOrder
        ): android.companion.BluetoothLeDeviceFilter.Builder;
        public setScanFilter(param0: android.bluetooth.le.ScanFilter): android.companion.BluetoothLeDeviceFilter.Builder;
        public setNamePattern(param0: javautilregexPattern): android.companion.BluetoothLeDeviceFilter.Builder;
        public setRenameFromName(
          param0: string,
          param1: string,
          param2: number,
          param3: number
        ): android.companion.BluetoothLeDeviceFilter.Builder;
        public build(): android.companion.BluetoothLeDeviceFilter;
        public constructor();
      }
    }
  }
}

declare namespace android {
  export namespace companion {
    export class CompanionDeviceManager extends javalangObject {
      public static EXTRA_DEVICE: string;
      public associate(
        param0: android.companion.AssociationRequest,
        param1: android.companion.CompanionDeviceManager.Callback,
        param2: android.os.Handler
      ): void;
      public requestNotificationAccess(param0: android.content.ComponentName): void;
      public getAssociations(): javautilList<any>;
      public hasNotificationAccess(param0: android.content.ComponentName): boolean;
      public disassociate(param0: string): void;
    }
    export namespace CompanionDeviceManager {
      export abstract class Callback extends javalangObject {
        public onDeviceFound(param0: android.content.IntentSender): void;
        public onFailure(param0: string): void;
        public constructor();
      }
    }
  }
}

declare namespace android {
  export namespace companion {
    export class DeviceFilter extends javalangObject implements android.os.Parcelable {
      /**
       * Constructs a new instance of the android.companion.DeviceFilter interface with the provided implementation.
       */
      public constructor(implementation: { describeContents(): number; writeToParcel(param0: android.os.Parcel, param1: number): void });
      public static PARCELABLE_WRITE_RETURN_VALUE: number;
      public static CONTENTS_FILE_DESCRIPTOR: number;
      public describeContents(): number;
      public writeToParcel(param0: android.os.Parcel, param1: number): void;
    }
  }
}

declare namespace android {
  export namespace companion {
    export class WifiDeviceFilter extends javalangObject implements android.companion.DeviceFilter {
      public static CREATOR: android.os.Parcelable.Creator<any>;
      public equals(param0: javalangObject): boolean;
      public describeContents(): number;
      public writeToParcel(param0: android.os.Parcel, param1: number): void;
      public hashCode(): number;
    }
    export namespace WifiDeviceFilter {
      export class Builder extends javalangObject {
        public setNamePattern(param0: javautilregexPattern): android.companion.WifiDeviceFilter.Builder;
        public constructor();
        public build(): android.companion.WifiDeviceFilter;
      }
    }
  }
}
