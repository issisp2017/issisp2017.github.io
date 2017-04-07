---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
---

The Eight International Summer School on Information Security and Protection
(ISSISP) is hosted by [CEA LIST](http://www-list.cea.fr/en/).

It will be held at the Château de Button, Gif-sur-Yvette, France, on July 17-21, 2017.



# Contacts

{% assign people = site.data.people.people | group_by:"status" | sort:"lastname"%}
{% assign status = site.data.people.status %}



{% for pgroup in people %}

{% for person in pgroup.items %}


{% if forloop.first %}

### {{ site.data.people[person.status].longname }}
{% endif %}

- [{{ person.firstname }} {{ person.lastname }}]({{ person.www }}), 
  {{ person.affiliation }}
{% endfor %}
{% endfor %}



