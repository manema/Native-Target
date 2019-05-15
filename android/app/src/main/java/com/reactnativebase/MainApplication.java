package com.reactnativebase;

import android.support.annotation.Nullable;
import com.reactnativenavigation.NavigationApplication;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.facebook.react.ReactPackage;
import com.airbnb.android.react.maps.MapsPackage;

import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.appevents.AppEventsLogger;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

    private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

    protected static CallbackManager getCallbackManager() {
        return mCallbackManager;
    }

     @Override
     public boolean isDebug() {
          return BuildConfig.DEBUG;
     }

    @Nullable
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return Arrays.<ReactPackage>asList(
            new ReactNativeConfigPackage(),
            new MapsPackage(),
                new FBSDKPackage(mCallbackManager)
        );
    }

    @Nullable
    @Override
    public String getJSMainModuleName() {
      return "index.android";
    }
}