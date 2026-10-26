---
title: Project Team
permalink: /team/
---

<!-- Team members are listed in _data/team.yml -->

**Principal Investigator**

{% for person in site.data.team.principal_investigator %}{% include person.html person=person %}{% endfor %}

---

**Co-Principal Investigators**

{% for person in site.data.team.co_principal_investigators %}{% include person.html person=person %}{% endfor %}

---

The project would not be possible without our wonderful team of research assistants, past and present.

**Current Research Assistants**

{% for person in site.data.team.current_research_assistants %}{% include person.html person=person %}{% endfor %}

---

**Previous Research Assistants**

{% for person in site.data.team.previous_research_assistants %}{% include person.html person=person %}{% endfor %}
