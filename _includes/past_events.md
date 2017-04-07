{% assign events = site.data.previous | sort:"-year" %}

### Past events

{% for e in events %}
- [ISSISP {{ e.year }}]({{ e.url }}), {{ e.location }}
{% endfor %}
