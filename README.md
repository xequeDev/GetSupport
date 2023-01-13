# GetSupport
A library for verify support of HTML, SVG, CSS and JS...

## Get the library
```
var tester = new GetSupport();
```

## Verify HTML support
```
tester.support("html","h1");
```

## Verify SVG support
```
tester.support("svg","Rect");
//Do not work on IE
```

## Verify CSS support
```
tester.support("cssIE","display");
//This work on IE and can make this: "border-radius" == "borderRadius"
//Or
tester.support("css","display");
//This not work on IE but you can make this: tester.support("css","display","flex");
```

## Verify JS support
```
tester.support("jsPrefix","indexedDB");
//This test the support whit prefixes
//Or
tester.support("js","indexedDB");
```
