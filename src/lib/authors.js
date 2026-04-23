// Author commentary entries. Each record:
//   name       the author's name or tradition
//   symbols    ♀ / ♂ / ♀♂ glyphs marking the author's sex. Every attested
//              canonical author of scripture is male — which is itself
//              part of the argument the book is making visible.
//   epithet    a short phrase naming their role in the argument (optional)
//   dates      lived / active dates
//   books      books of the Bible this author is responsible for — used
//              to compute which spectrum entries link to them
//   commentary array of paragraphs (supports **bold** and *italic* via md.js)

export const authors = [
  {
    name: 'Paul of Tarsus',
    symbols: '♂',
    epithet: 'The Architect',
    dates: 'c. 5 – c. 67 CE',
    books: [
      'Romans',
      '1 Corinthians',
      '2 Corinthians',
      'Galatians',
      'Ephesians',
      'Philippians',
      'Colossians',
      '1 Thessalonians',
      '2 Thessalonians',
      '1 Timothy',
      '2 Timothy',
      'Titus',
      'Philemon'
    ],
    commentary: [
      'A Pharisee from Tarsus, educated under Gamaliel in Jerusalem, a Roman citizen by birth. He persecuted the earliest Christian communities until the Damascus road encounter reversed his trajectory. From roughly 48 CE until his execution under Nero, he travelled the Roman Mediterranean as a missionary and letter-writer. His letters are the oldest surviving Christian documents — most of them written before any of the four gospels were set down.',
      '**Paul was unmarried during his ministry.** 1 Corinthians 7:8 places him in the same category as "the unmarried and the widows." 1 Corinthians 9:5 names the rights of other apostles and the brothers of the Lord — and Cephas — to travel with believing wives, implicitly excluding Paul from those who did. His teaching on marriage and his counsel on women\'s standing in the church comes from outside a marriage, not from inside one. Whether he had been widowed (as Pharisaic culture would normally expect of a man his age) or had never married is not preserved.',
      'Reading Paul\'s letters as correspondence, as is routine, misses what he was actually doing. **Paul was not writing theology for readers. He was building a system.**',
      'He was an architect. The churches he planted were nodes in a graph. He commissioned local elders in every city (Acts 14:23; Titus 1:5) — always *multiple* elders per congregation, never a single bishop. He appointed letter-bearers who could read the letters aloud and answer questions when he could not be present — Phoebe to Rome, Tychicus to Ephesus. He sent letters meant to circulate between churches: Colossians 4:16 tells the Colossians to swap their letter with the Laodiceans. He commanded older women to train younger women (Titus 2:3–5) so the teaching office would have a successor layer before the apostolic generation died out.',
      '**The architecture is redundant by design.** Multiple elders per node. Multiple letter-bearers per route. Multiple corresponding churches, multiple streams of funding, multiple lanes of teaching. If any single elder apostatized, the church had others. If any single envoy was lost, a second could carry the same authority. No single point of failure. Paul built belt-and-suspenders.',
      'He built a system of feeding. The Jerusalem collection — a cash transfer from the Gentile churches to the mother church in Judea — materially bound the new congregations to the Jewish core of the movement, and knit distant communities into mutual obligation. Romans 16 names twenty-six people, most of whom could host travelers across the network. The early church was a distributed mutual-aid graph before it was anything else.',
      'He built a system of correction. **The correction is a feedback loop pulling outliers back toward a centrist mean.** 1 Corinthians opens with a report from "Chloe\'s people" (1 Cor 1:11) — a feedback channel. Galatians pulls a congregation drifting toward legalism back toward grace. 1 Corinthians pulls a congregation drifting toward libertinism back toward self-discipline. Each correction is a stabilizing force, not an absolute ruling. The apostolic generation built protocols for how churches would challenge, correct, and restore one another without Paul physically present — a self-regulating graph that could keep its own equilibrium.',
      '**And each letter was local.** Each one was written to a particular church facing particular problems. Galatians is for the Galatians. 1 Corinthians is for the Corinthians. Ephesians is for Ephesus. Titus is for Crete. The letters were not corporate memos meant to bind every church across the empire. They are the opposite. Paul wrote to a specific congregation, diagnosing a specific local sin, prescribing a specific local correction. *Other churches were not supposed to catch the problem by contagion* — and the corrections were not supposed to travel across the network as universal law. When 1 Corinthians 14:34 silences women at Corinth, it is not a command for Ephesus. When 1 Timothy 2:11–15 restricts women from teaching at Ephesus, it is not a command for Corinth. The letters were surgical. Reading them as blanket policy is exactly the architectural mistake Paul was trying to prevent.',
      'This is why the pastoral epistles hit so hard on qualifications for leaders. Paul wasn\'t being fussy about credentials. He was the last of the original apostles still writing, and he was writing to men — Timothy at Ephesus, Titus in Crete — who would have to carry the graph into a post-apostolic future. The elders had to be "one-woman men" because fidelity tracks reliability, and reliability is what holds a decentralized network together across distance and generations.',
      '**Paul is an architect planning for the church to survive its own demise.** He knew Nero was closing in. He knew Jerusalem would fall. He knew the apostolic generation was dying. What he built was a graph that could propagate itself without him — a self-correcting, self-teaching, mutually obligated community designed to keep working once the founders were gone.',
      'Reading his restrictive passages — on women, on worship, on marriage — without that engineering frame is like reading load-bearing specifications and concluding the architect hated architecture. The restrictions are stress tests on the local nodes; *the system is the argument.*'
    ]
  },
  {
    name: 'Luke the Physician',
    symbols: '♂',
    epithet: 'The Pairer',
    dates: 'active c. 50 – 80 CE',
    books: ['Luke', 'Acts'],
    commentary: [
      'A Greek-speaking physician (Colossians 4:14) who travelled with Paul on portions of his later missionary journeys — the "we" passages in Acts begin in Troas (Acts 16:10) and continue through the Roman imprisonment. Luke wrote a two-volume history (Luke–Acts) that together make up about a quarter of the New Testament.',
      '**No wife of Luke is mentioned in the New Testament.** Early Christian tradition (Jerome, *Against Jovinian* 1.40) holds that he remained unmarried throughout his life. His vocation as a travelling physician-historian in Paul\'s company fit celibate service; whatever he wrote about women, he wrote from outside marriage.',
      'Luke\'s literary stance on women is distinctive and deliberate. Throughout his gospel and Acts he pairs male and female figures so that nearly every teaching moment Jesus has with a man is matched by one with a woman. Simeon and Anna. Zechariah and Mary. Jairus\'s daughter and the bleeding woman. The lost sheep and the lost coin. The shepherd and the widow.',
      'The only woman the New Testament grammatically calls a "disciple" is named by Luke (Tabitha, *mathētria*, Acts 9:36). The only named female financial backers of Jesus\'s ministry are named by Luke (Mary Magdalene, Joanna, Susanna, Luke 8:1–3). Paul\'s missionary partner Priscilla — teaching Apollos at Ephesus — is narrated by Luke (Acts 18:24–26). Philip\'s prophesying daughters are named by Luke (Acts 21:8–9). Pentecost including "your daughters shall prophesy" is narrated by Luke (Acts 2:17–18).',
      'Luke is not documenting women\'s presence as an afterthought. He is building a two-column gospel where the women\'s column is load-bearing. Remove it and the structure falls.'
    ]
  },
  {
    name: 'The Evangelist John',
    symbols: '♂',
    epithet: 'The Close Observer',
    dates: 'late first century',
    books: ['John'],
    commentary: [
      'Traditionally identified with the "beloved disciple" of the fourth gospel. Regardless of the authorship question, the Johannine portrait of women is distinctive in the New Testament — not by quantity of scenes, but by theological weight.',
      '**No wife of the Fourth Evangelist is mentioned in the New Testament or the early tradition.** If the gospel is the work of the apostle John son of Zebedee, his marital status was not preserved. If it is the work of a Johannine community or school in late first-century Ephesus, there is no single marriage to speak of. What he observes about women, he observes from outside marriage.',
      'Jesus\'s longest recorded conversation in any gospel is with the unnamed Samaritan woman at Jacob\'s well (John 4). Martha of Bethany is given one of the two great christological confessions in the gospel — *You are the Christ, the Son of God* (John 11:27) — matching Peter\'s confession in Matthew 16:16. The resurrection scene is focalized through Mary Magdalene, not through the male disciples: she is the first to see the risen Christ and the first sent with the message (John 20:11–18).',
      'John has less narrative material about women than Luke does. But every scene in which a woman appears in John\'s gospel is structurally central to his theology of who Jesus is. The women are not decorative. They hold the climactic moments.'
    ]
  },
  {
    name: 'Peter',
    symbols: '♂',
    epithet: 'The Fisher',
    dates: 'c. 1 BCE – c. 64–67 CE',
    books: ['1 Peter', '2 Peter'],
    commentary: [
      'A Galilean fisherman, first-named of the Twelve, executed in Rome under Nero. The authorship of the letters bearing his name is debated in critical scholarship (1 Peter is more widely accepted than 2 Peter), but the tradition read both as addressed to Christian communities scattered across five Roman provinces of Asia Minor at the outset of the Neronian persecution.',
      '**Peter was married.** The first woman Jesus heals in Mark\'s gospel is Peter\'s mother-in-law (Mark 1:30), a detail the gospel tradition preserves without editing. Paul later writes that Peter travelled with his wife during his ministry (1 Corinthians 9:5), and Clement of Alexandria preserves an early tradition that Peter\'s wife was martyred in the same Roman persecution that claimed him — that he encouraged her at her execution with the words *remember the Lord* (Stromateis 7.11). Peter\'s household code is not written from a celibate\'s distance. It is written by a man whose wife was active in the same ministry, the same household, and the same line of political risk he was.',
      'The five Roman provinces where 1 Peter lands — Pontus, Galatia, Cappadocia, Asia, Bithynia — sat under layered law: imperial Roman on top, local Hellenistic custom underneath. Roman *paterfamilias* authority included, in theory, the power of life and death (*vitae necisque potestas*) over wife, children, and slaves, though by the first century the ancient extreme had been softened by custom and by Augustus\'s marriage legislation — the *Lex Julia de Maritandis Ordinibus* (18 BCE) and the *Lex Papia Poppaea* (9 CE). Roman matrons had more legal autonomy than Greek women of the classical period: they could hold property, initiate divorce, inherit, and appear unaccompanied in public. Stoic household ethics (Musonius Rufus, Seneca the Younger) were actively being reformulated in this same period toward a language of mutual partnership between husband and wife.',
      'But a wife\'s *religion* was still legally her husband\'s affair. When a Roman husband converted with his household, the household followed. When a wife converted without her husband, the marriage itself was politically exposed: a pagan husband could denounce her to a magistrate as a Christian, divorce her unilaterally under *repudium*, deny her access to her children, or seize her dowry. Tacitus and Pliny both record cases of Christian wives reported by their husbands. Peter\'s pastoral instruction to wives to win their husbands through quiet conduct (1 Peter 3:1–2) is written directly into this legal reality — not as an abstract theology of wifely submission, but as a survival strategy for specific Christian wives facing specific magistrates under a new emperor who was starting to hunt Christians in the capital.',
      'The household code itself (1 Peter 3:1–7) is structurally similar to Paul\'s — wives submit, husbands love — but theologically distinctive in its second half. Husbands are bound to their wives\' honor, and their own access to God is tied to how they treat their wives: *honor them as co-heirs of the grace of life, so that your prayers may not be hindered* (1 Pet 3:7). It is the strongest eschatological equality statement in any New Testament household code, sitting immediately beside a command to wifely submission.',
      'The compressed double message of 1 Peter 3:7 — *weaker vessel* and *co-heirs of grace* — captures the tension the whole New Testament works through. Hierarchy is an ordinary first-century social form. Equality is an eschatological reality that is already breaking in. Peter writes inside the tension because that is where his own marriage, and every marriage in the Asian provinces, actually sat.'
    ]
  },
  {
    name: 'The Torah compilers',
    symbols: '♂',
    epithet: 'The Weavers',
    dates: 'compiled c. 900–500 BCE',
    books: ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy'],
    commentary: [
      'The Pentateuch is the product of multiple sources — traditionally four, in the classical documentary hypothesis (J, E, D, P), and more in recent scholarship — woven together across centuries into the form the canon received.',
      'The women of the Torah appear across every source. The Priestly creation account (Genesis 1) grants the image of God to male and female as a class — a deliberate democratization of a category that surrounding ancient Near Eastern cultures reserved for kings. The Yahwist account (Genesis 2–3) names Eve as *ezer kenegdo*, a helper corresponding to Adam — while also laying the groundwork for the Genesis 3:16 curse language. Miriam\'s song in Exodus 15 is old enough to predate most of the surrounding narrative material.',
      'On the other side, Numbers 30 codifies male veto of women\'s vows within household law. Leviticus 27 sets redemption valuations at fifty shekels for adult men, thirty for adult women. The Torah holds both sides of the book\'s argument at once: the founding theology of shared image, and the statutory asymmetry of daily legal practice. The compilers preserved both and refused to choose.'
    ]
  },
  {
    name: 'The Deuteronomistic Historian',
    symbols: '♂',
    epithet: 'The Memorialist',
    dates: 'composed c. 620 BCE, expanded in exile',
    books: ['Judges', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '2 Chronicles', 'Micah'],
    commentary: [
      'The long narrative running from Judges through Kings (and echoed by the Chronicler\'s later retelling) is the work of a school of scribes, likely centred in Jerusalem under Josiah\'s reforms and expanded during the Babylonian exile.',
      'The Deuteronomistic History\'s treatment of women is strikingly uneven by the standards of its century. Deborah leads Israel in war (Judges 4–5) with no editorial apology. Huldah authenticates scripture for the king\'s delegation (2 Kings 22). Hannah\'s Magnificat shapes Mary\'s a thousand years later (1 Samuel 2). Abigail talks David out of murder (1 Samuel 25).',
      'In a cultural moment when Greek historians were writing male-centred political annals, the Israelite historian kept preserving the moments women acted decisively, and kept letting the women\'s speech stand in their own voices. The Deuteronomist is not making an argument about women\'s leadership; he simply reports it — which, in the ancient world, *was* the argument.'
    ]
  },
  {
    name: 'The sages of Proverbs and the Song',
    symbols: '♂',
    epithet: 'The Quoters',
    dates: 'compiled c. 950–450 BCE',
    books: ['Proverbs', 'Song of Songs'],
    commentary: [
      'Proverbs is traditionally attributed to Solomon but includes material by "Agur son of Jakeh" and "King Lemuel" (Proverbs 30–31) — the latter explicitly transmitting his mother\'s teaching. The book ends with an acrostic poem almost certainly not by Solomon himself: a hymn to the *eshet chayil*, the "woman of valor," who buys fields, manages a textile business, extends credit to the poor, and teaches wisdom at the city gate.',
      'The capstone of the Hebrew Bible\'s wisdom literature is a male king reciting his mother\'s instruction about a woman as the model of the wise life. The transmission chain itself is the message.',
      'The Song of Songs is traditionally attributed to Solomon, too, but reads as a composite of love lyrics voiced mostly in the female register. The bride speaks first, speaks most, and initiates. The sages chose to preserve her voice without editing.'
    ]
  },
  {
    name: 'Jesus ben Sira',
    symbols: '♂',
    epithet: 'The Patristic Seed',
    dates: 'active c. 180 BCE',
    books: ['Sirach'],
    commentary: [
      'A Jerusalem sage in the generation before the Maccabean revolt, writing wisdom literature in Hebrew (his grandson later translated it into Greek, preserving a preface that dates the composition precisely). The book — Sirach, or Ecclesiasticus — entered the Septuagint and is canonical in Catholic, Orthodox, and Ethiopian Orthodox traditions. Protestant canons treat it as apocryphal.',
      'Sirach is the most influential Second Temple text on Christian theology of women that most Protestant readers have never heard of. Sirach 25:24 — *from a woman was the beginning of sin, and because of her we all die* — is the seed of Tertullian\'s *diaboli ianua* ("the devil\'s gateway"), which in turn shaped the patristic rhetoric Augustine and Jerome inherited and passed on to the Western church.',
      'The verse pins sin to Eve specifically, in a way Paul never does in Romans 5 or 1 Corinthians 15 (Paul consistently names Adam as the source). Much of what the Christian tradition later *said* about women\'s primordial responsibility for the fall comes from Ben Sira, not from Genesis. The canonical debate over Sirach is, in part, a debate over which books get to shape the church\'s emotional vocabulary about sex and sin.'
    ]
  },
  {
    name: 'The preservers of the quiet voices',
    symbols: '♀♂',
    epithet: 'The Anonymous',
    dates: 'various, c. 500 BCE – c. 100 BCE',
    books: ['Ruth', 'Esther', 'Joel'],
    commentary: [
      'Two books of the Hebrew Bible are named for women, and both are by anonymous authors. The Book of Ruth — composed most likely in the Persian era, around the time Ezra was ordering the dissolution of mixed marriages — canonizes a Moabite great-grandmother of David as a quiet counter-witness to the rising theology of ethnic purity. The Book of Esther, set in Xerxes\' court, records a Jewish queen\'s political courage saving her people from genocide, in a text that never once names God.',
      'Joel, a prophet whose date and setting are both contested, left behind one of the most-quoted passages in the New Testament — *your sons and your daughters shall prophesy* — which Peter read aloud at Pentecost as the charter of the new community.',
      'These writers did not sign their names. What survived is the material they preserved: women acting decisively in crisis, women as the vehicle of God\'s redemptive intervention, women included by covenant across ethnic and legal lines the surrounding culture enforced strictly.',
      'Realistically the authors were almost certainly men. Scribal literacy in the ancient world was overwhelmingly male; the production of a canonical text required training, resources, and social access that were structurally closed to most women. But *the possibility is the weight.* Every other canonical author in this list is known and male. These are the only ones where the door is even open — and when every other row reads ♂, the one row that might carry a ♀ is doing the work the whole disproportion is asking you to feel.'
    ]
  }
];
