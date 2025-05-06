from django import template

register = template.Library()

@register.filter(name='split')
def split(value, delimiter):
    """
    Split a string into a list using the given delimiter.
    Usage: {{ string|split:"," }}
    """
    if value:
        return value.split(delimiter)
    return []

@register.filter(name='multiply')
def multiply(value, arg):
    """
    Multiply the value by the argument.
    Usage: {{ value|multiply:2 }}
    """
    try:
        return float(value) * float(arg)
    except (ValueError, TypeError):
        return 0

@register.filter(name='index')
def index(value, arg):
    """
    Returns the item at the given index in the list.
    Usage: {{ list|index:0 }}
    """
    try:
        return value[int(arg)]
    except (IndexError, TypeError, ValueError):
        return '' 