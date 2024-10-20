# Getting Started

>**Note**: In order to hide secret data of the API, first of all, you have to create a file named `.env` in the root of the project, with the data provided in the email (API_URL, READ_TOKEN)
## Step 1: Install dependencies

First, we need to run `npm i` to install the dependencies. 

Then, we need to install native dependencies for iOS. 

```bash
cd ios
pod install
```

## Step 2: Start the Metro Server

In this step, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

>**Note**: The first time you run the project in emulators, the installation could take a long time
