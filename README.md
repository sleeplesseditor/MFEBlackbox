# MFE Blackbox

An attempt at using the Blackbox pattern for React Micro-Frontend development, as shown in [Naim Gaberlo's Medium article](https://medium.com/@naimgaberlo/creating-an-mfe-blackbox-with-react-f82fd4dcc509).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

When running the vanilla build command and serving static files, use the following commands in the Developer Console:

1) window["blackbox"].init(document.getElementById("root"));
2) window.dispatchEvent(new CustomEvent('openBlackbox',{detail:{test:'string'}}));
