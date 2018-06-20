# dual-config-sample
A sample which shows that multiple node-configs fail to act independently.

## Sample output:
```
> Instance of Alpha
Alpha Name: Apple (should be Apple)
> Instance of Beta
Beta Name: Apple (should be Beta)
> Instance of Beta
Another Beta: Apple (should be Guacamole)
> Instance of Alpha
Another Alpha: Apple (should be Banana)
Try Sub: Apple (should be Artichoke)
```
