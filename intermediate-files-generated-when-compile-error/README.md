# repro steps:

1. Run build.sh

# expected:

* out.js
* no exportsmodule.js, no usesmodule.js

# actual: 

* no out.js
* exportsmodule.js & usesmodule.js
