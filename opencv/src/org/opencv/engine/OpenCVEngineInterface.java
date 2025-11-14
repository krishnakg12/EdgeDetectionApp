package org.opencv.engine;

import android.os.IBinder;
import android.os.RemoteException;

/**
 * Compilation-only stub for OpenCVEngineInterface.
 * Methods declare RemoteException so callers that catch RemoteException compile.
 * These implementations return safe defaults and do NOT perform real engine behavior.
 */
public abstract class OpenCVEngineInterface {
    public static OpenCVEngineInterface asInterface(IBinder b) {
        return null;
    }

    // Methods expected by OpenCV Java code; declare RemoteException so try/catch compiles.
    public int getEngineVersion() throws RemoteException {
        return 0;
    }

    public String getLibPathByVersion(String version) throws RemoteException {
        return null;
    }

    public boolean installVersion(String version) throws RemoteException {
        return false;
    }

    public String getLibraryList(String version) throws RemoteException {
        return null;
    }

    // Keep a Stub helper for compatibility
    public static class Stub {
        public static OpenCVEngineInterface asInterface(IBinder b) {
            return OpenCVEngineInterface.asInterface(b);
        }
    }
}