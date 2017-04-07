---
layout: page
title: People
permalink: /people
---


{% assign people = site.data.people.people | group_by:"status" | sort:"lastname"
%}
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


