---
layout: two_column
left_column: matsuo_core_menu.html
title: "Matsuo Core Utils - Collections"
---

# Collections

Package ```pl.matsuo.core.util.collection``` contains two classes ```CollectionUtil``` and ```ArrayUtil```. First
provides common functions for collection manipulation, second for array manipulation

## CollectionUtil

{% highlight java %}
// Return last element of array.
public static <E> E last(E ... array)
{% endhighlight %}

{% highlight java %}
// Merge two arrays. Return array of same type.
public static <E> E[] merge(E[] baseArray, E ... additionalElements)
{% endhighlight %}

## ArrayUtil

{% highlight java %}
// Return list containing values of properties from objects in collection.
public static <E> List<E> collect(Collection<?> collection, String property)
{% endhighlight %}

{% highlight java %}
// Create map where keys are values of properties from object in collection.
public static <E, F> Map<E, F> toMap(Collection<F> collection, String property)
{% endhighlight %}

{% highlight java %}
// Create new map with keys build by passed mapping function.
public static <D, E, F> Map<D, F> 
reMap(Map<? extends E, F> sourceMap, Function<E, D> mapping)
{% endhighlight %}

{% highlight java %}
// Get last element of list.
public static <E> E last(List<E> list)
{% endhighlight %}

{% highlight java %}
// Merge all collections into list.
public static <E> List<E> merge(Collection<E> ... collections)
{% endhighlight %}

{% highlight java %}
// Functional fold.
public static <F,T> T 
fold(Collection<? extends F> list, final T startValue, BiFunction<T, F, T> reducer)
{% endhighlight %}

