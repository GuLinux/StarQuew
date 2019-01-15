# This file was automatically generated by SWIG (http://www.swig.org).
# Version 3.0.12
#
# Do not make changes to this file unless you know what you are doing--modify
# the SWIG interface file instead.

from sys import version_info as _swig_python_version_info
if _swig_python_version_info >= (2, 7, 0):
    def swig_import_helper():
        import importlib
        pkg = __name__.rpartition('.')[0]
        mname = '.'.join((pkg, '_image_processing')).lstrip('.')
        try:
            return importlib.import_module(mname)
        except ImportError:
            return importlib.import_module('_image_processing')
    _image_processing = swig_import_helper()
    del swig_import_helper
elif _swig_python_version_info >= (2, 6, 0):
    def swig_import_helper():
        from os.path import dirname
        import imp
        fp = None
        try:
            fp, pathname, description = imp.find_module('_image_processing', [dirname(__file__)])
        except ImportError:
            import _image_processing
            return _image_processing
        try:
            _mod = imp.load_module('_image_processing', fp, pathname, description)
        finally:
            if fp is not None:
                fp.close()
        return _mod
    _image_processing = swig_import_helper()
    del swig_import_helper
else:
    import _image_processing
del _swig_python_version_info

try:
    _swig_property = property
except NameError:
    pass  # Python < 2.2 doesn't have 'property'.

try:
    import builtins as __builtin__
except ImportError:
    import __builtin__

def _swig_setattr_nondynamic(self, class_type, name, value, static=1):
    if (name == "thisown"):
        return self.this.own(value)
    if (name == "this"):
        if type(value).__name__ == 'SwigPyObject':
            self.__dict__[name] = value
            return
    method = class_type.__swig_setmethods__.get(name, None)
    if method:
        return method(self, value)
    if (not static):
        if _newclass:
            object.__setattr__(self, name, value)
        else:
            self.__dict__[name] = value
    else:
        raise AttributeError("You cannot add attributes to %s" % self)


def _swig_setattr(self, class_type, name, value):
    return _swig_setattr_nondynamic(self, class_type, name, value, 0)


def _swig_getattr(self, class_type, name):
    if (name == "thisown"):
        return self.this.own()
    method = class_type.__swig_getmethods__.get(name, None)
    if method:
        return method(self)
    raise AttributeError("'%s' object has no attribute '%s'" % (class_type.__name__, name))


def _swig_repr(self):
    try:
        strthis = "proxy of " + self.this.__repr__()
    except __builtin__.Exception:
        strthis = ""
    return "<%s.%s; %s >" % (self.__class__.__module__, self.__class__.__name__, strthis,)

try:
    _object = object
    _newclass = 1
except __builtin__.Exception:
    class _object:
        pass
    _newclass = 0

class ImageProcessing(_object):
    __swig_setmethods__ = {}
    __setattr__ = lambda self, name, value: _swig_setattr(self, ImageProcessing, name, value)
    __swig_getmethods__ = {}
    __getattr__ = lambda self, name: _swig_getattr(self, ImageProcessing, name)
    __repr__ = _swig_repr

    def __init__(self, fitsfile, debug_log):
        this = _image_processing.new_ImageProcessing(fitsfile, debug_log)
        try:
            self.this.append(this)
        except __builtin__.Exception:
            self.this = this
    __swig_destroy__ = _image_processing.delete_ImageProcessing
    __del__ = lambda self: None

    def save(self, filename):
        return _image_processing.ImageProcessing_save(self, filename)

    def autostretch(self):
        return _image_processing.ImageProcessing_autostretch(self)

    def clip(self, min, max):
        return _image_processing.ImageProcessing_clip(self, min, max)

    def resize(self, width, height, interpolation):
        return _image_processing.ImageProcessing_resize(self, width, height, interpolation)

    def width(self):
        return _image_processing.ImageProcessing_width(self)

    def height(self):
        return _image_processing.ImageProcessing_height(self)

    def bpp(self):
        return _image_processing.ImageProcessing_bpp(self)

    def debayer(self, pattern):
        return _image_processing.ImageProcessing_debayer(self, pattern)
ImageProcessing_swigregister = _image_processing.ImageProcessing_swigregister
ImageProcessing_swigregister(ImageProcessing)

# This file is compatible with both classic and new-style classes.


