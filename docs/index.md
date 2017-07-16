---
layout: default
---

<div class="hero prototype-grid">
    <h1>Wireframe</h1>
</div>

<div>
    <div class="content">
        <article class="block typo">
            <section class="grid">
                <div class="block typo lg-6 xs-12">
                    <p>Wireframe is build in a modular way. That allows you to import only the components you need. If you are not using any preprocessor in your project, you can still include Wireframe's compiled stylesheet like any external resource.</p>
                </div>

                <div class="block lg-6 xs-12">
{% highlight scss %}
@import "wireframe/components/grid";
@import "wireframe/components/buttons";
{% endhighlight %}

{% highlight html %}
<link rel="stylesheet" href="wireframe.min.css">
{% endhighlight %}
                </div>
            </section>
        </article>
    </div>
</div>
