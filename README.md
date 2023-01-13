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

## Verify HTML Attribute support
```
tester.support("attribute","placeholder","input");
```

## Verify SVG support
```
tester.support("svg","Rect");
//Do not work on IE
```

## Verify CSS support
```
tester.support("css01","display");
//This work on IE and can make this: "border-radius" == "borderRadius"
//Or
tester.support("css02","display");
//This not work on IE but you can make this: tester.support("css","display","flex");
```

## Verify JS support
```
tester.support("js01","indexedDB");
//This test the support whit prefixes
//Or
tester.support("js02","indexedDB");
```
