// Scripture passages on gender roles, arranged left (women leading God's
// people) to right (women barred from teaching). Each section: title
// (passage or figure), jurisdiction (Testament · book), context (who,
// where, to whom — one short phrase), year (event or composition date;
// BCE negative), spectrum (-5 … +5), gesture (the punch — often a direct
// punch — often a direct quote), body (textual and interpretive context), citation (verse
// references), link (Bible Gateway), culture (extrabiblical situation —
// what the wider world around the passage was doing), eli5 (plain-terms
// gloss). Spectrum range: -3 (red / women lead) … +3 (violet / women silent).
//
// Reading order is LEFT-TO-RIGHT along the gender-role spectrum, not by
// book or date. Ties on spectrum are broken by year ascending.

const raw = [
  // ───────────── far left (-5) — women directly lead God's people ─────────────
  {
    title: 'Miriam the prophetess',
    jurisdiction: 'Old Testament · Exodus · Micah',
    context: 'Israel on the far shore of the Red Sea',
    year: -1400,
    spectrum: -3,
    gesture: '*Miriam the prophet, Aaron\'s sister, took a tambourine in her hand, and all the women went out after her.* When God later lists who brought Israel out of Egypt, he names three — Moses, Aaron, and Miriam. Three names, no hierarchy.',
    body: 'Exodus 15 hands Miriam the first hymn in the Bible immediately after the Red Sea crossing, sung by a woman leading other women. The label *prophet* (נְבִיאָה, neviah) is applied to her before any of the classical writing prophets. Centuries later, when Micah 6:4 recounts how God delivered Israel, the voice of God names three liberators — "I sent before you Moses, Aaron, and Miriam" — without qualification or ranking. Numbers 12 later records God rebuking Aaron and Miriam for challenging Moses, but preserves the baseline fact that God speaks directly with her.',
    citation: 'Exodus 15:20–21; Numbers 12:1–15; Micah 6:4.',
    link: 'https://www.biblegateway.com/passage/?search=Exodus+15%3A20-21%3B+Micah+6%3A4&version=ESV',
    culture: 'Egypt had seen Hatshepsut reign as pharaoh (~1478–1458 BCE) within cultural memory of the traditional Exodus date. Egyptian women held property, initiated divorce, and served as priestesses of Hathor and Isis. The Late Bronze Age world Miriam came out of was not one in which female public authority was unimaginable — neighboring Ugaritic and Hittite texts likewise name women as cultic specialists and mediators.',
    eli5: 'The first worship song in the Bible is led by a woman. When God later names who brought Israel out of Egypt, he lists Moses, Aaron, and Miriam — three leaders, named together.'
  },
  {
    title: 'Deborah judges Israel',
    jurisdiction: 'Old Testament · Judges',
    context: 'Israel under Jabin of Hazor, twenty years of oppression',
    year: -1100,
    spectrum: -3,
    gesture: '*She was judging Israel at that time.* The only judge of Israel whose call to office is given without apology. Barak — the general — refuses to go to war unless she comes with him.',
    body: 'Judges 4–5 names Deborah as both a prophet and the ruling judge of Israel at a moment of national crisis. She sends for Barak, commands him to muster ten thousand troops, and names the battle plan. Barak answers: "If you go with me, I will go; but if you do not go with me, I will not go." She goes. The victory song of Judges 5 — one of the oldest poems in the Hebrew Bible — is composed in her voice. No other judge in the book gets a song, and no other judge\'s authority is presupposed so casually by the text.',
    citation: 'Judges 4:4–10; Judges 5 (Song of Deborah).',
    link: 'https://www.biblegateway.com/passage/?search=Judges+4-5&version=ESV',
    culture: 'The Late Bronze Age collapse had dismantled the Hittite and Mycenaean states; Israel was a tribal confederation without a king. Canaanite religion in the land venerated Asherah, Anat, and Astarte — female warrior-deities and kingmakers — and surviving Ugaritic texts show Anat leading armies. A woman leading a tribal militia against a Canaanite general was culturally legible in that world; female authority in war and religion was shared ancient Near Eastern currency.',
    eli5: 'Deborah was the top political and spiritual leader of Israel in her generation. Her general refused to go to battle without her. She went, they won, and the victory song was written in her voice.'
  },
  {
    title: 'Huldah authenticates the Law',
    jurisdiction: 'Old Testament · 2 Kings · 2 Chronicles',
    context: 'Josiah\'s Jerusalem, a lost scroll found during temple repairs',
    year: -622,
    spectrum: -3,
    gesture: 'Jeremiah was prophesying. Zephaniah was prophesying. When the high priest found the scroll of the Law in the temple, King Josiah sent his scribes to Huldah. Her ruling on the scroll is the foundation of the Josianic reform — and of the biblical canon itself.',
    body: 'In 622 BCE, during temple repairs, the high priest Hilkiah found a scroll — most likely a form of Deuteronomy. Instead of taking it to the prophets active at court, King Josiah\'s delegation (including Hilkiah himself) went to *the prophetess Huldah, the wife of Shallum*, in the Second Quarter of Jerusalem. Her two-part oracle authenticated the scroll as the word of God and became the charter of Josiah\'s sweeping reform. She is the first named woman in scripture to authoritatively interpret a written text, and her ruling is the hinge on which the Deuteronomistic canon turns.',
    citation: '2 Kings 22:14–20; 2 Chronicles 34:22–28.',
    link: 'https://www.biblegateway.com/passage/?search=2+Kings+22%3A14-20&version=ESV',
    culture: 'Prophecy in the ancient Near East was a routinely gender-mixed institution. The Mari archives (18th century BCE) preserve dozens of female prophetesses\' oracles delivered to kings; the Neo-Assyrian court archives at Nineveh preserve more, from prophetesses named in their own right. Contemporary to Huldah, Greek Delphi was elevating the Pythia — a female oracle whose rulings kings obeyed without argument. Female authentication of sacred word was not an Israelite innovation.',
    eli5: 'When Josiah\'s priests discovered a lost scroll in the temple, they didn\'t take it to the famous male prophets of the day. They took it to Huldah, a woman, and asked her to rule on whether it was scripture. Her ruling stuck — and shaped the Bible we have.'
  },
  {
    title: 'Junia, outstanding among the apostles',
    jurisdiction: 'New Testament · Romans',
    context: 'Paul greeting the Roman church from Corinth',
    year: 57,
    spectrum: -3,
    gesture: '*Greet Andronicus and Junia, my kin and my fellow prisoners, who are outstanding among the apostles.* For a thousand years no commentator doubted Junia was a woman. Then, quietly, translators turned her into a man named Junias — a name that does not appear in any Greek inscription of the period.',
    body: 'Romans 16:7 greets a husband-and-wife apostolic pair. *Iounian* in the accusative could theoretically point to either the female Junia or a hypothetical male Junias; every church father without exception read her as a woman. John Chrysostom wrote: "how great the wisdom of this woman must have been, that she was even counted worthy of the title of apostle." The shift to "Junias" began in medieval Latin manuscripts and spread through twentieth-century English translations, only to be reversed by the NA28 Greek text and most modern critical editions. The simpler reading of *episēmoi en tois apostolois* ("outstanding among the apostles") is also the older one. Junia was an apostle.',
    citation: 'Romans 16:7. Chrysostom, *Homilies on Romans* 31.',
    link: 'https://www.biblegateway.com/passage/?search=Romans+16%3A7&version=ESV',
    culture: 'Rome under early Nero, before the Great Fire. Elite Roman women with *sui iuris* status — often widows — managed large estates, funded religious associations as patrons, and earned honorific titles in their own names. The *Res Gestae Divi Augusti* names Livia as a public benefactor; contemporary inscriptions name dozens more. The idea of a named woman with public religious standing was not alien to the Roman Christians reading Paul\'s list.',
    eli5: 'Paul greets a woman named Junia and calls her "outstanding among the apostles." The church read her that way for a thousand years. Then translators quietly changed her name to a male form — "Junias" — that nobody in the ancient world actually had. Modern Greek texts have restored her.'
  },

  // ───────────── women commissioned (-4) ─────────────
  {
    title: 'Mary Magdalene, apostle to the apostles',
    jurisdiction: 'New Testament · John',
    context: 'Resurrection morning, garden tomb outside Jerusalem',
    year: 33,
    spectrum: -3,
    gesture: 'First to the tomb. First to see the risen Christ. First sent with the message. Every gospel places women at the center of the resurrection morning, in a legal culture where a woman\'s testimony did not count in court.',
    body: 'All four gospels name Mary Magdalene among the first witnesses of the resurrection. John 20 gives her the most extended scene: she meets the risen Jesus alone in the garden, he calls her by name, and he sends her to the apostles with the announcement of his resurrection and ascension. The church fathers — Hippolytus among them — called her *apostola apostolorum*, "apostle to the apostles." The choice is jarring by first-century legal standards: rabbinic law disallowed female testimony in many kinds of proceedings. Jesus breaks that rule at the most important commissioning in the gospel.',
    citation: 'John 20:11–18; Matthew 28:1–10; Mark 16:1–8; Luke 24:1–10.',
    link: 'https://www.biblegateway.com/passage/?search=John+20%3A11-18&version=ESV',
    culture: 'Both Jewish and Roman legal systems disallowed women\'s testimony in most kinds of proceedings. Josephus in *Antiquities* 4.8.15 records: *let not the testimony of women be admitted, on account of the levity and boldness of their sex.* Roman civil law (Justinian\'s later *Digest* preserves earlier opinions) treated female testimony with suspicion in most criminal matters. For a Jewish rabbi to commission a woman as the first witness of the resurrection was a direct affront to both legal cultures.',
    eli5: 'The resurrection was first witnessed by women. Jesus appeared to Mary Magdalene and sent her to announce his rising to the apostles. In a culture where a woman\'s word didn\'t count in court, Jesus made a woman the first preacher of the resurrection.'
  },
  {
    title: 'Priscilla corrects Apollos',
    jurisdiction: 'New Testament · Acts · Romans',
    context: 'A synagogue in Ephesus, on Paul\'s second missionary journey',
    year: 52,
    spectrum: -3,
    gesture: 'Apollos was already a well-known teacher — eloquent, mighty in the scriptures. But his theology was incomplete. *Priscilla and Aquila* took him aside and *explained to him the way of God more accurately.* Her name comes first.',
    body: 'Acts 18:24–26 describes a husband-wife team teaching a prominent male preacher — Apollos, later one of the leaders in the Corinthian church — a fuller theology of the gospel. Luke, a careful stylist, names Priscilla before Aquila in four of the six times the couple appears in the New Testament. In a culture where male-female pairs were almost always named husband-first, the reversal is a quiet insistence that she is the primary teacher. Paul later greets the "church that meets in their house" (Romans 16:5; 1 Corinthians 16:19), implying home congregations in both Rome and Ephesus.',
    citation: 'Acts 18:24–26; Romans 16:3–5; 1 Corinthians 16:19; 2 Timothy 4:19.',
    link: 'https://www.biblegateway.com/passage/?search=Acts+18%3A24-26&version=ESV',
    culture: 'Jewish diaspora synagogues across Asia Minor regularly included women as major donors and title-holders. Surviving Greek inscriptions from Smyrna, Myndos, and Crete name women as *archisynagōgos* (synagogue leader) and *presbytera* (elder); the Bernice inscription from Cyrenaica names a woman as *archēgos* of her community. Priscilla\'s teaching role would have been continuous with known diaspora synagogue practice, not an innovation.',
    eli5: 'A husband-and-wife team taught Apollos — already a famous preacher — the gospel "more accurately." Luke almost always names the wife first, which in that culture was itself a quiet statement about who was teaching whom.'
  },
  {
    title: 'Phoebe, deacon and patron',
    jurisdiction: 'New Testament · Romans',
    context: 'Paul commending the letter-bearer of Romans to the Roman church',
    year: 57,
    spectrum: -3,
    gesture: '*I commend to you Phoebe our sister, who is a deacon of the church at Cenchreae... for she has been a benefactor of many, and of myself as well.* Paul entrusted the letter to the Romans — the most theologically weighty letter in the canon — to her hand.',
    body: 'Romans 16:1–2 names Phoebe as *diakonos* (deacon) of the church at Cenchreae and *prostatis* (patron, benefactor, or protector) of many including Paul. The word *prostatis* in Greek legal usage means someone with social standing and financial authority over a client — it is not a servile term. Paul is commending her as the letter-bearer, which in the first-century context carried the responsibility of reading the letter aloud and answering questions about its meaning. Romans — Paul\'s densest theological work — was first expounded to the Roman churches by Phoebe.',
    citation: 'Romans 16:1–2.',
    link: 'https://www.biblegateway.com/passage/?search=Romans+16%3A1-2&version=ESV',
    culture: 'Greco-Roman patronage (*prostasia*) was a formal legal and social institution. Elite women routinely served as patrons of trade guilds, religious cults, and civic bodies; Junia Theodora of Corinth — roughly contemporary with Phoebe — is attested by five surviving honorific inscriptions as a legal patron of Lycian expatriates, receiving public thanks from two separate cities. The word *prostatis* carried real civic weight. Paul is using a Corinthian reader\'s vocabulary of honor exactly.',
    eli5: 'Paul called Phoebe a deacon and a patron — someone with real standing and authority. He trusted her to carry the letter to the Romans, read it aloud to the churches there, and answer their questions about it. She delivered his most important letter.'
  },
  {
    title: 'Esther saves her people',
    jurisdiction: 'Old Testament · Esther',
    context: 'Persian court of Xerxes, during the Babylonian exile',
    year: -480,
    spectrum: -3,
    gesture: '*If I perish, I perish.* A Jewish queen in the Persian court uses political strategy, fasting, and a two-banquet gambit to reverse an empire-wide extermination order. The book that bears her name never mentions God — her agency is the argument.',
    body: 'The Book of Esther is one of only two books in the Hebrew Bible named for a woman. When Haman engineers a royal decree for the genocide of the Jews, Mordecai challenges Esther: "who knows whether you have not come to the kingdom for such a time as this?" She calls a three-day fast across the Jewish community, approaches the king uninvited — a capital offense — and orchestrates two strategic banquets that turn the decree on its author. The holiday of Purim commemorates her decisive action. The text never once names God; the deliverance comes through a woman\'s political courage.',
    citation: 'Esther 4:14–17; Esther 7; Esther 9:29–32.',
    link: 'https://www.biblegateway.com/passage/?search=Esther+4-7&version=ESV',
    culture: 'Xerxes\' court was formally gender-segregated with a large harem and eunuch administration, but queens and queen mothers (Atossa, Amestris) exercised substantial political power behind the scenes — Herodotus devotes significant attention to Persian royal women as political actors. The year 480 BCE was also the year of Thermopylae and Salamis, Xerxes\' failed invasion of Greece; the historical Xerxes was in an unstable phase when the book\'s action unfolds. Esther\'s gambit fits known Persian court dynamics exactly.',
    eli5: 'An entire Jewish population was about to be slaughtered by imperial decree. A Jewish queen risked her life to reverse it. The holiday of Purim still commemorates the night she pulled it off. God is never named in the book — her agency is the story.'
  },

  // ───────────── women prophesy (-3) ─────────────
  {
    title: 'Lydia, first European convert',
    jurisdiction: 'New Testament · Acts',
    context: 'A riverside prayer meeting outside Philippi',
    year: 50,
    spectrum: -2,
    gesture: '*A dealer in purple cloth.* Luke introduces the first convert in Europe as a woman running a business in a luxury textile — the richest trade in Philippi. Her house became the first European church.',
    body: 'Acts 16:11–15, 40 describes Paul\'s first convert on European soil: Lydia of Thyatira, a *porphyropolis* — a seller of Tyrian purple, the most expensive dye in the ancient Mediterranean, whose trade was regulated by imperial monopoly. The Lord "opened her heart" during a riverside prayer meeting. She was baptized along with her household (no husband is mentioned), insisted Paul and Silas lodge with her, and by the end of the chapter her home has become the Philippian congregation\'s meeting place. The letter to the Philippians — Paul\'s warmest and most joyful — is written to a church that began in her house.',
    citation: 'Acts 16:11–15, 40.',
    link: 'https://www.biblegateway.com/passage/?search=Acts+16%3A11-15%2C+40&version=ESV',
    culture: 'Lydia\'s home city Thyatira is documented by surviving inscriptions for a guild of purple-dyers (*hoi baphoi*) with female members. Tyrian purple was imperial-regulated and extraordinarily profitable — a single pound fetched more than a laborer\'s annual wage — and female entrepreneurs in the trade are attested in Egyptian business papyri. Philippi itself was a Roman colony settled by veterans, where women had more legal autonomy than in Greek provincial cities. A Christian house church hosted by a businesswoman was culturally credible in that exact location.',
    eli5: 'The first European convert to Christianity was a businesswoman. Her house became the first church in Europe. Paul\'s most affectionate letter — Philippians — was written to a congregation she started.'
  },
  {
    title: 'Anna the prophetess in the temple',
    jurisdiction: 'New Testament · Luke',
    context: 'Jerusalem temple, forty days after Jesus\' birth',
    year: -5,
    spectrum: -2,
    gesture: 'Luke pairs Simeon with Anna at Jesus\'s presentation. *She began to speak about the child to all who were waiting for the redemption of Jerusalem.* Two witnesses — one man, one woman — identify the Messiah at the temple gate.',
    body: 'Luke 2:36–38 introduces Anna, daughter of Phanuel, a widow who had spent decades in the temple fasting and praying. Luke explicitly calls her a prophet — the same word used of Deborah and Huldah. She recognizes the infant Jesus, thanks God, and begins a public proclamation to all who were awaiting the redemption of Jerusalem. Luke\'s gospel, throughout, deliberately pairs male and female figures (Simeon and Anna; Zechariah and Mary; Jairus\'s daughter and the bleeding woman; the lost sheep and the lost coin). Anna is the first person in the New Testament to publicly preach about Jesus.',
    citation: 'Luke 2:36–38.',
    link: 'https://www.biblegateway.com/passage/?search=Luke+2%3A36-38&version=ESV',
    culture: 'Second Temple Judaism included the Therapeutae — a male-and-female ascetic community near Alexandria described by Philo (*On the Contemplative Life*, ~20 CE) whose women were equal participants in theological discussion and composed their own hymns. The Herodian temple had a Court of Women where prophetic and ascetic vocations by women were tolerated. Anna\'s role fit a known first-century Jewish category, not an exceptional one.',
    eli5: 'When Jesus was presented in the temple as a baby, two people recognized him — an old man and an old woman. Luke calls her a prophet. She began telling everyone in the temple courts about him. That makes her the first person in the New Testament to preach about Christ.'
  },
  {
    title: 'The women who funded Jesus\'s ministry',
    jurisdiction: 'New Testament · Luke',
    context: 'Jesus\' itinerant ministry across Galilee',
    year: 30,
    spectrum: -2,
    gesture: 'Luke lists them by name. *Mary called Magdalene... Joanna, the wife of Chuza, Herod\'s household manager, and Susanna, and many others, who provided for them out of their means.* Jesus\'s itinerant ministry was funded by women.',
    body: 'Luke 8:1–3 lists three named women — and refers to many more — who traveled with Jesus and the Twelve and financially supported the whole ministry *ek tōn hyparchontōn autais*, "out of their own resources." Joanna\'s husband was Herod Antipas\'s palace steward; she was a woman of considerable means. The same women turn up again at the crucifixion (Luke 23:49, 55) and at the empty tomb (Luke 24:10). In an economy where women rarely had independent control of wealth, a substantial portion of the movement\'s income came from female disciples.',
    citation: 'Luke 8:1–3; Luke 23:49–55; Luke 24:10.',
    link: 'https://www.biblegateway.com/passage/?search=Luke+8%3A1-3&version=ESV',
    culture: 'Roman society recognized a class of wealthy female patrons (*matronae*) who funded religious movements; Herod Antipas\'s court at Tiberias circulated significant wealth through administrators like Chuza, Joanna\'s husband. Antipas was a nervous client-king (he had just beheaded John the Baptist); his *epitropos*\'s wife publicly backing an itinerant Galilean rabbi was politically risky — a detail Luke preserves without editorial comment.',
    eli5: 'Jesus and the Twelve didn\'t self-fund. They were bankrolled by a group of women — named in the text — who traveled with them and paid for the ministry out of their own money. The same women were at the cross and the empty tomb.'
  },
  {
    title: 'Your daughters shall prophesy',
    jurisdiction: 'Old Testament · Joel · New Testament · Acts',
    context: 'Peter preaching at Pentecost, Jerusalem',
    year: 33,
    spectrum: -2,
    gesture: 'Peter\'s first Christian sermon quotes Joel. *In the last days, God declares, I will pour out my Spirit on all flesh, and your sons AND your daughters shall prophesy.* The church\'s founding text is a promise that women will preach.',
    body: 'On the day of Pentecost, with the Spirit descending on the gathered disciples — men and women alike (Acts 1:14 names "the women" among them) — Peter interprets the moment by quoting the prophet Joel. The passage is explicit: sons and daughters, menservants and maidservants, male and female, will all prophesy by the Spirit. This is not a future promise to be realized later; Peter is saying it has begun now. The founding charter of the Christian church names female prophecy as a visible sign of the Spirit\'s arrival.',
    citation: 'Joel 2:28–29; Acts 2:17–18.',
    link: 'https://www.biblegateway.com/passage/?search=Acts+2%3A17-18&version=ESV',
    culture: 'Prophecy in the broader Greco-Roman world was a gender-mixed institution. The Pythia at Delphi — whose consultations shaped imperial policy — was always a woman; the Sibyls of Cumae, Erythrae, and Tibur were women whose written oracles Romans consulted officially; the *bacchantes* of Dionysus prophesied in ecstatic rites. Peter\'s quotation of Joel claims the new Christian community would continue the cross-cultural pattern of gender-mixed prophetic voice, not break it.',
    eli5: 'The very first Christian sermon, preached by Peter on Pentecost, quotes Joel: when the Spirit comes, sons and daughters will both prophesy. That\'s the charter of the church. Women prophesying is not a concession — it\'s evidence the Spirit has arrived.'
  },
  {
    title: 'Philip\'s four daughters who prophesied',
    jurisdiction: 'New Testament · Acts',
    context: 'Caesarea, the week before Paul\'s arrest in Jerusalem',
    year: 57,
    spectrum: -2,
    gesture: 'One parenthetical sentence — *he had four unmarried daughters who prophesied* — and Luke moves on. Female prophecy was so normal in the early church that it needed no explanation.',
    body: 'Acts 21:8–9 names Philip the evangelist\'s four unmarried daughters, all of whom prophesied. The detail is offered casually, the way one might note a family\'s profession. Eusebius (*Ecclesiastical History* 3.31, 5.24) preserves a second-century tradition that the four daughters were senior authorities in the church in Hierapolis and a primary source for the oral tradition of the apostolic era. Their gift is presented as continuous with the prophecy of Joel 2 and Acts 2 — sons and daughters alike, prophesying.',
    citation: 'Acts 21:8–9. Eusebius, *Ecclesiastical History* 3.31, 3.39, 5.24.',
    link: 'https://www.biblegateway.com/passage/?search=Acts+21%3A8-9&version=ESV',
    culture: 'Caesarea Maritima was a gentile-majority Roman administrative capital — Pilate\'s residence — with a significant Jewish population. Within a century of Acts 21, the Montanist movement of Asia Minor (~170 CE) would include the prominent female prophets Priscilla and Maximilla whose oracles circulated widely; the movement\'s condemnation by the mainstream church was partly a backlash against female prophetic leadership that the apostolic age had taken for granted.',
    eli5: 'Luke mentions, almost in passing, that Philip had four unmarried daughters who all prophesied. No explanation, no controversy. By the second century, the historian Eusebius treated them as senior authorities in the early church.'
  },
  {
    title: 'Older women, teach the younger',
    jurisdiction: 'New Testament · Titus',
    context: 'Paul instructing Titus to pastor the churches of Crete',
    year: 66,
    spectrum: -2,
    gesture: '*Older women are to teach what is good, and so train the young women.* Paul does not suggest it. He commands it. Every congregation must have women in a teaching office so that the younger women have a woman to learn from.',
    body: 'Titus 2:3–5 names a teaching office. Older women in every congregation are *kalodidaskalous* — "teachers of what is good," a compound word that exists in extant Greek literature only here, invented to name the role. They are commissioned as trainers of the younger women, the way older men are commissioned as trainers of the younger men a few verses earlier. Whatever the content they teach (the list includes love of family, self-control, household competence, and submission to one\'s own husband — contested in content), the structural instruction is unambiguous: women must hold a formal teaching position in the church. A congregation without women teaching women is out of compliance with Titus 2.',
    citation: 'Titus 2:3–5; cf. Titus 2:1–2, 6–8.',
    link: 'https://www.biblegateway.com/passage/?search=Titus+2%3A1-8&version=ESV',
    culture: 'Crete was infamous across the ancient world for moral dysfunction — Paul himself quotes the Cretan poet Epimenides (*Cretans are always liars, evil beasts, lazy gluttons*, ~600 BCE) at Titus 1:12. Aristotle\'s *Politics* 2.10 describes the Cretan constitution\'s tolerance of promiscuity. Organizing a formal teaching office for women made pastoral sense in a setting where older Christian women would need to model an alternative ethic against a long-cynical local culture.',
    eli5: 'Paul tells Titus: every church needs older women in a teaching role, responsible for training the younger women. It\'s the same pattern he gives for older men teaching younger men a few verses earlier. The content they teach is debated; the fact that women must be teachers is not.'
  },

  // ───────────── women act (-2) ─────────────
  {
    title: 'Hannah\'s song',
    jurisdiction: 'Old Testament · 1 Samuel',
    context: 'Temple at Shiloh, after years of infertility',
    year: -1050,
    spectrum: -2,
    gesture: '*The bows of the mighty are broken, but the feeble bind on strength.* Hannah sings a prophetic poem of divine reversal a thousand years before Mary\'s Magnificat — which borrows its shape directly.',
    body: '1 Samuel 2:1–10 is the prayer Hannah sings after the birth of Samuel. It is the first of a small class of poems in scripture that announce a theology of reversal: the proud brought low, the weak raised up, the barren made fruitful. Mary\'s Magnificat (Luke 1:46–55), a thousand years later, is modeled on Hannah\'s song line for line. Hannah\'s poem also contains the first scriptural reference to God\'s "anointed one" — *meshiach*, messiah — at its very end. A woman\'s prayer supplies both the shape of Mary\'s song and the first use of the word "messiah" in the Hebrew Bible.',
    citation: '1 Samuel 1:10–2:10; cf. Luke 1:46–55.',
    link: 'https://www.biblegateway.com/passage/?search=1+Samuel+2%3A1-10&version=ESV',
    culture: 'Ancient Near Eastern law codes — the Code of Hammurabi (~1750 BCE) and the Middle Assyrian Laws — give women legal standing to make votive commitments in their own right. Temple complexes across the region (Mesopotamia, Anatolia, Egypt) employed women as singers, weavers, and cultic functionaries. Hannah\'s Nazirite vow for Samuel (1 Sam 1:11) is the kind of act the broader legal culture already recognized as a woman\'s prerogative.',
    eli5: 'Hannah sings about God pulling the powerful down and lifting up the weak. A thousand years later, Mary copies the song almost exactly when Gabriel tells her she\'ll bear the Messiah. The word "messiah" shows up in scripture for the first time in Hannah\'s mouth.'
  },
  {
    title: 'Abigail intervenes with David',
    jurisdiction: 'Old Testament · 1 Samuel',
    context: 'David in the wilderness, before his coronation',
    year: -1010,
    spectrum: -2,
    gesture: 'David is riding out to massacre an entire household over an insult. Abigail rides out with two hundred loaves and a direct rebuke. *The LORD has restrained you from bloodguilt.* David listens.',
    body: '1 Samuel 25 narrates one of the oldest surviving confrontations between a woman and a future king. Nabal has insulted David; David has armed four hundred men to kill every male in Nabal\'s household. Abigail, without her husband\'s knowledge, loads provisions, intercepts David, and delivers a theologically sophisticated speech that names his intended act as murder and offers him a door back. David credits her: "Blessed be your discretion, and blessed be you, who have kept me this day from bloodguilt." She is one of the very few characters in the Deuteronomistic History who successfully talks David out of a decision.',
    citation: '1 Samuel 25:14–42.',
    link: 'https://www.biblegateway.com/passage/?search=1+Samuel+25&version=ESV',
    culture: 'Property and household management by wives in the ancient Near East was more extensive than many modern readers assume. Mesopotamian *nin-dingir* priestess-administrators managed estates; the Middle Assyrian Laws grant married women legal standing to transact on behalf of the household; the Nuzi tablets preserve women buying and selling land. Abigail acting without Nabal\'s consent fits the broader legal pattern of the region, not an Israelite exception.',
    eli5: 'David was about to murder an entire household. Abigail rode out alone, called it murder, and talked him out of it. The future king listened. It\'s one of the few times anyone in scripture talks David out of a bad decision.'
  },
  {
    title: 'Tabitha — disciple',
    jurisdiction: 'New Testament · Acts',
    context: 'Peter arriving in Joppa, before the Cornelius vision',
    year: 40,
    spectrum: -2,
    gesture: 'Luke calls her *mathētria* — disciple, in the feminine. It is the only use of the feminine form of that word in the entire New Testament. The title is hers alone.',
    body: 'Acts 9:36–42 narrates the death and raising of Tabitha (called *Dorcas* in Greek) in Joppa. The Greek word Luke uses to describe her — *mathētria* — is the feminine of *mathētēs* (disciple). It is the only time any form of that feminine noun appears in the New Testament. She is praised for the tunics and garments she had made for the widows; when she dies the community pleads for Peter, and Peter raises her. The story is the first resurrection of the apostolic age. The only person the New Testament grammatically calls a "woman disciple" is raised from the dead.',
    citation: 'Acts 9:36–42.',
    link: 'https://www.biblegateway.com/passage/?search=Acts+9%3A36-42&version=ESV',
    culture: 'Jewish women in diaspora port cities commonly organized mutual-aid networks around widow care. Epigraphic evidence from Asia Minor and Egypt documents women with the title *mētēr tēs synagōgēs* ("mother of the synagogue") organizing charitable distribution, ransom of captives, and burial funds. Joppa\'s mixed Jewish-gentile port community would have had active women\'s benevolence networks. Tabitha\'s garment-making for widows fits a recognized communal role, not a private piety.',
    eli5: 'In the Greek of the New Testament, the word "disciple" has a feminine form. It\'s only used once — of Tabitha. The first resurrection in the early church was her raising. The only woman the New Testament calls a "disciple" grammatically.'
  },

  // ───────────── women praised (-1) ─────────────
  {
    title: 'The Proverbs 31 woman of valor',
    jurisdiction: 'Old Testament · Proverbs',
    context: 'King Lemuel quoting his mother\'s instruction',
    year: -950,
    spectrum: -1,
    gesture: '*She considers a field and buys it; with the fruit of her hands she plants a vineyard.* The capstone of the book of wisdom is a hymn to a woman who trades, plans, employs, speaks wisdom, and is praised at the city gate.',
    body: 'Proverbs 31:10–31 is an acrostic poem — twenty-two verses, one per letter of the Hebrew alphabet — that closes the book of Proverbs. The *eshet chayil* ("woman of strength") buys real estate, runs a textile business, supervises employees, extends credit to the poor, speaks *torat chesed* ("the teaching of lovingkindness"), and is publicly praised by husband and children. The Hebrew word *chayil* — "strength, valor" — is used elsewhere in scripture for the "mighty men" of David\'s army. The book of wisdom ends not with a patriarch but with a portrait of female industry and agency.',
    citation: 'Proverbs 31:10–31.',
    link: 'https://www.biblegateway.com/passage/?search=Proverbs+31%3A10-31&version=ESV',
    culture: 'The acrostic pattern and idealized female portrait have strong parallels in Egyptian wisdom literature — the *Instruction of Ptahhotep* (~2400 BCE) and the *Instruction of Any* (~1300 BCE) — where competent wives are praised in similar terms. Female ownership of fields and vineyards is attested in Mesopotamian economic texts from as early as 1800 BCE; at Ugarit (13th century BCE) women sold and leased agricultural land in their own names. The Proverbs woman is one variant of a widespread ancient Near Eastern ideal.',
    eli5: 'The book of Proverbs ends with a long poem praising a woman who runs businesses, buys land, employs people, and teaches wisdom. The Hebrew word for her ("chayil") is the same word used elsewhere for David\'s mighty warriors.'
  },
  {
    title: 'Ruth the Moabite',
    jurisdiction: 'Old Testament · Ruth',
    context: 'Moab, then Bethlehem in the era of the judges',
    year: -1100,
    spectrum: -1,
    gesture: '*Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God.* A foreign widow\'s covenant vow to her mother-in-law is memorized as wedding liturgy three thousand years later.',
    body: 'The Book of Ruth is one of only two books in the Hebrew Bible named for a woman. Ruth is a widowed Moabite — a foreigner whose people are generally treated with hostility elsewhere in scripture. She binds herself to Naomi, gleans in Boaz\'s fields, and by the end of the book has been named in Matthew 1 as an ancestor of King David and of Jesus. The first-person oath in Ruth 1:16–17 is the only line of scripture that later became standard wedding vocabulary across Jewish and Christian liturgy. The book\'s heroism is fully her own — Boaz acts only after she corners him at the threshing floor.',
    citation: 'Ruth 1:16–17; Ruth 3:1–15; Matthew 1:5.',
    link: 'https://www.biblegateway.com/passage/?search=Ruth+1%3A16-17&version=ESV',
    culture: 'Though the story is set in the judges period, most critical scholarship dates the Book of Ruth\'s composition to the Persian era (5th century BCE) — the same moment Ezra was ordering the dissolution of mixed marriages (Ezra 9–10) and Nehemiah was forbidding them (Nehemiah 13:23–27). Deuteronomy 23:3–4 explicitly barred Moabites from the assembly. A Moabite great-grandmother of David, canonized in that climate, functions as a quiet counter-witness to the rising theology of ethnic purity.',
    eli5: 'A foreign widow ties herself to her Israelite mother-in-law with a vow so memorable it still shows up in wedding ceremonies. She takes the initiative at every key moment of the book. She ends up in the family tree of Jesus.'
  },
  {
    title: 'The Samaritan woman at the well',
    jurisdiction: 'New Testament · John',
    context: 'Jacob\'s well at Sychar, Samaria, midday',
    year: 30,
    spectrum: -1,
    gesture: 'Jesus\'s longest recorded conversation — longer than any he has with any of the Twelve — is with a twice-outsider: a Samaritan, a woman. She runs back and preaches. *Many Samaritans from that town believed in him because of the woman\'s testimony.*',
    body: 'John 4:4–42 narrates Jesus\'s conversation with an unnamed Samaritan woman at Jacob\'s well. It is the longest recorded dialogue Jesus has with anyone in the Gospels. She raises theological questions about worship on the mountain versus Jerusalem; Jesus answers her with some of the most important teaching about the Spirit in John\'s gospel. The disciples return and are scandalized that he is speaking to a woman at all. She runs to town, testifies, and many Samaritans believe "because of the woman\'s testimony." The Greek word for testimony is *martyria* — the root of "martyr," used throughout John of legitimate witness.',
    citation: 'John 4:4–42.',
    link: 'https://www.biblegateway.com/passage/?search=John+4%3A4-42&version=ESV',
    culture: 'Samaritans were considered ritually unclean by many first-century Jews — Josephus preserves episodes of open hostility between the groups. Rabbinic sources (the later Mishnah *Pirkei Avot* 1:5) and the broader Jewish-cultural code discouraged unrelated men from speaking to unrelated women in public at all: *engage not in much converse with women, not even with your own wife, much less your neighbor\'s*. Jesus\'s sustained public theological conversation with a Samaritan woman was a triple breach — ethnic, gender, and apparent marital status — which the disciples\' recorded astonishment confirms.',
    eli5: 'Jesus has his longest conversation in the Gospels with a Samaritan woman — an outsider twice over. She asks him theological questions, he answers them seriously, and she runs to town and preaches about him. Many believe because of her testimony.'
  },

  // ───────────── one in Christ (0) ─────────────
  {
    title: 'Male and female he created them',
    jurisdiction: 'Old Testament · Genesis',
    context: 'The priestly creation account, opening the canon',
    year: -900,
    spectrum: 0,
    gesture: '*So God created humankind in his own image, in the image of God he created them; male and female he created them.* The first chapter of the Bible locates the image of God in humanity\'s plurality — male and female, equally and together.',
    body: 'Genesis 1:26–28 is the first creation account. Male and female are both created in the divine image, both blessed, both given dominion, both commanded to be fruitful and multiply. There is no hierarchy between them in this text, no order of authority, no differentiation of role. The word *adam* in verse 27 is generic humanity. Whatever else scripture later says about the sexes, the opening page of the canon locates the *imago Dei* in humanity\'s plurality — male and female, equally and inseparably.',
    citation: 'Genesis 1:26–28.',
    link: 'https://www.biblegateway.com/passage/?search=Genesis+1%3A26-28&version=ESV',
    culture: 'Ancient Near Eastern cosmogonies — the Babylonian *Enuma Elish*, the Atrahasis epic, the Egyptian Memphite Theology — typically locate divine image-bearing in the king alone, and sometimes in the priesthood. The king was the *ṣalmu* ("image") of the god. The Priestly creation account\'s democratization of the *imago Dei* to *male and female* as a class is a deliberate theological counter-move: granting every human, both sexes, what the surrounding cultures reserved for royalty.',
    eli5: 'The very first chapter of the Bible says God made humanity "male and female" in his image, with no ranking between them, both blessed, both given authority over the earth. Whatever comes later, the first page is equality.'
  },
  {
    title: 'Song of Songs',
    jurisdiction: 'Old Testament · Song of Songs',
    context: 'Israel\'s canonical love poetry, long read at Passover',
    year: -950,
    spectrum: 0,
    gesture: 'The bride speaks first. The bride speaks most. The bride initiates. *I am my beloved\'s, and my beloved is mine.* The only full-length love poem in scripture is voiced primarily by a woman.',
    body: 'The Song of Songs is canonically attributed to Solomon but is built as a dialogue, with the majority of the lines in the female voice. She opens the poem; she initiates desire; she searches the city at night for her lover; she boasts of his beauty. The mutuality formula *I am my beloved\'s and my beloved is mine* (2:16; 6:3) is one of the book\'s refrains, and is syntactically balanced — neither owes possession or initiative to the other. The book\'s presence in the canon is itself remarkable: no law, no covenant, no kingdom, no divine name. Only mutual desire, mostly from her.',
    citation: 'Song of Songs 2:16; 6:3; 7:10.',
    link: 'https://www.biblegateway.com/passage/?search=Song+of+Songs+2%3A16%3B+6%3A3%3B+7%3A10&version=ESV',
    culture: 'Egyptian love poetry of the New Kingdom (*Papyrus Chester Beatty I*, *Papyrus Harris 500*, ~1300 BCE) is the closest literary parallel to the Song. These Egyptian songs are frequently voiced by a female speaker, celebrate mutual desire without hierarchy, and use garden imagery and seek-and-find motifs almost identical to the Hebrew text. The Song of Songs is continuous with an older Mediterranean literary form in which women spoke freely about their own erotic lives — a voice the canon chose to preserve unaltered.',
    eli5: 'The Bible\'s only full-length love poem is sung mostly by a woman. She initiates. She pursues. She owns her desire. The refrain — "I am my beloved\'s and my beloved is mine" — is symmetrical. Nothing about either one "belonging to" the other more.'
  },
  {
    title: 'Neither male nor female',
    jurisdiction: 'New Testament · Galatians',
    context: 'Paul to the Galatian churches on circumcision and baptism',
    year: 49,
    spectrum: 0,
    gesture: '*There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus.* Paul\'s baptismal formula names the three founding hierarchies of the ancient world and cancels them in one sentence.',
    body: 'Galatians 3:28 is widely understood to preserve an early baptismal formula that predates Paul\'s letter. In the ancient Mediterranean, three divisions structured legal and social life: ethnic (Jew/Gentile), status (free/slave), and sex (male/female). The formula names and cancels all three at the moment of baptism. It does not claim sex disappears — Paul elsewhere discusses men and women as such — but it claims that in the new body of Christ, none of the three determines standing before God. Whatever later hierarchies developed, Galatians 3:28 is the theological ceiling.',
    citation: 'Galatians 3:27–29.',
    link: 'https://www.biblegateway.com/passage/?search=Galatians+3%3A27-29&version=ESV',
    culture: 'Greco-Roman mystery cults — Mithras, Isis, the Eleusinian mysteries — commonly used initiation formulas naming what the initiate had left behind: the ethnic, legal, and sexual markers of ordinary life. A surviving Hellenistic prayer preserved in rabbinic literature offers the mirror image: *blessed are you, Lord, that I am not a gentile, that I am not a slave, that I am not a woman*. Paul\'s formula in Galatians follows the cultural form exactly — and inverts its most celebrated example, turning a prayer of thankful separation into a declaration of shared standing.',
    eli5: 'Paul\'s baptismal formula says that in Christ there is no Jew or Greek, no slave or free, no male or female. The three big dividing lines of the ancient world are all named and canceled in one sentence.'
  },
  {
    title: 'Mutual authority',
    jurisdiction: 'New Testament · 1 Corinthians',
    context: 'Paul answering Corinthian questions about marriage',
    year: 55,
    spectrum: 0,
    gesture: '*The wife does not have authority over her own body, but the husband does. Likewise the husband does not have authority over his own body, but the wife does.* The clauses are symmetrical.',
    body: '1 Corinthians 7:3–5 is Paul\'s most explicit teaching on sexual mutuality within marriage. The husband\'s body, Paul says, is owned by his wife; the wife\'s body is owned by her husband. The Greek verb *exousiazō* ("to exercise authority") is used of both parties identically. In a first-century legal context where a wife\'s body was almost universally understood as her husband\'s property and not the reverse, Paul\'s double-sided claim is startling. The symmetry is the point: whatever authority one spouse has over the other\'s body is matched exactly on the other side.',
    citation: '1 Corinthians 7:3–5.',
    link: 'https://www.biblegateway.com/passage/?search=1+Corinthians+7%3A3-5&version=ESV',
    culture: 'Roman marriage law recognized two forms: *manus* marriage (wife formally passed into husband\'s legal household) and *sine manu* marriage (wife remained under her father\'s legal authority). In both, the wife\'s body was subject to the husband\'s conjugal authority; the reverse was not legally recognized anywhere in the Roman codes. Greek marriage contracts from Egyptian papyri show the same asymmetry. Paul\'s symmetrical formulation — the husband\'s body belongs to his wife — has no counterpart in any surviving ancient legal corpus.',
    eli5: 'Paul says a wife has authority over her husband\'s body, and a husband has authority over his wife\'s body — same verb, same structure, both directions. In his culture that second half was almost unimaginable. He puts them side by side.'
  },
  {
    title: 'In the Lord, not independent',
    jurisdiction: 'New Testament · 1 Corinthians',
    context: 'Paul on head coverings in Corinthian worship',
    year: 55,
    spectrum: 0,
    gesture: 'After nine verses about head coverings and "the head of the woman is man," Paul stops. *Nevertheless, in the Lord, woman is not independent of man, nor man of woman. For as woman came from man, so also man comes through woman; and all things come from God.*',
    body: '1 Corinthians 11:11–12 is often overlooked because it sits inside the dense and contested head-covering passage. Having just argued a hierarchy of "heads" (verses 3–10), Paul immediately qualifies: *plēn* — "nevertheless," "however" — whatever that hierarchy is, in the Lord neither sex is independent of the other. Woman first came from man (the Genesis 2 point), but ever since, every man has come through a woman. Both sexes come from God. The verse is Paul\'s own corrective to any reading of his earlier lines that would make women derivative or subordinate.',
    citation: '1 Corinthians 11:11–12.',
    link: 'https://www.biblegateway.com/passage/?search=1+Corinthians+11%3A11-12&version=ESV',
    culture: 'Corinth\'s religious life was famously gender-mixed. The city\'s Isis cult had female priestesses; the nearby Dionysus cult had female *maenads* in ecstatic rite; the Demeter sanctuary at Eleusis (accessible to Corinthians) was female-led; and Corinth itself was infamous for the Aphrodite cult and its associated prostitution. The verb *korinthiazomai* — "to act like a Corinthian" — meant to behave promiscuously in classical Greek. Paul is writing in a city with both active female religious leadership and active female sexual servitude, trying to draw distinctions Corinthian readers could track.',
    eli5: 'Right after the passage about "the head of the woman is man," Paul himself qualifies it: "Nevertheless, in the Lord, woman is not independent of man, nor man of woman." Eve came from Adam; every man since has come through a woman. Both sexes come from God.'
  },
  {
    title: 'Submit to one another',
    jurisdiction: 'New Testament · Ephesians',
    context: 'Paul writing from Roman imprisonment to the Ephesian church',
    year: 62,
    spectrum: 0,
    gesture: '*Submitting to one another out of reverence for Christ.* Every word about wives submitting in Ephesians 5 is grammatically dependent on a verse that says all Christians submit to each other first.',
    body: 'Ephesians 5:21 closes a long call to be filled with the Spirit (vv. 18–21) and introduces the household code that follows (vv. 22–33). The participle *hypotassomenoi* ("submitting") in verse 21 is the same form that governs verse 22, where in most Greek manuscripts the verb is entirely absent and has to be supplied from verse 21. Grammatically, "wives to your husbands" only makes sense as a specific case of "submitting to one another." Many English translations obscure this by starting a new paragraph at verse 22. The Greek does not permit it. Whatever Paul later asks of wives, he asks of everyone first.',
    citation: 'Ephesians 5:18–21; cf. Ephesians 5:22–33.',
    link: 'https://www.biblegateway.com/passage/?search=Ephesians+5%3A18-21&version=ESV',
    culture: 'Greco-Roman household codes — Aristotle\'s *Politics* Book 1, the Stoic treatises collected in the so-called *Haustafeln* — established a strict one-way authority: husband over wife, father over children, master over slaves. The whole genre was asymmetric by definition. Paul begins his household code with *submit to one another* — reversing the one-way assumption before applying it in specific directions. No comparable Greek or Roman household code opens with mutual submission; readers inside that genre would have heard the reversal at once.',
    eli5: 'The famous "wives, submit to your husbands" passage is grammatically part of a bigger sentence. The verb is in verse 21 — "submit to one another." Everyone submits to everyone. Verse 22 is just the specific application to marriage.'
  },

  // ───────────── honor given (+1) ─────────────
  {
    title: 'Honor the weaker vessel',
    jurisdiction: 'New Testament · 1 Peter',
    context: 'Peter to Christians scattered across Asia Minor under Nero',
    year: 64,
    spectrum: 1,
    gesture: '*Husbands, live with your wives in an understanding way, showing honor to the woman as the weaker vessel, since they are heirs with you of the grace of life, so that your prayers may not be hindered.* Hierarchy and co-heirship, in the same sentence.',
    body: '1 Peter 3:7 addresses Christian husbands with a compressed double message. The word *asthenesteros* ("weaker") likely refers to social and physical vulnerability in the first-century Roman world, not to moral or spiritual inferiority. Husbands are told to honor their wives *precisely because* the wives are *sunklēronomoi* — co-heirs — of the grace of life. The grammar ties prayer itself to this honor: "so that your prayers may not be hindered." Within a household code that still assumes male headship, Peter binds the husband\'s access to God to the honor he gives his wife.',
    citation: '1 Peter 3:7.',
    link: 'https://www.biblegateway.com/passage/?search=1+Peter+3%3A7&version=ESV',
    culture: 'Roman *paterfamilias* authority carried in principle the power of life and death (*vitae necisque potestas*) over wife, children, and slaves — though by the first century the ancient extreme had been curtailed by custom and by the Lex Julia. Peter\'s command to husbands to honor wives as co-heirs, and to tie their access to God to it, inverts the direction of Roman household power at its source. The letter is written under Nero, as the Neronian persecution of Christians is beginning; the call to honor wives lands in a political moment of household strain.',
    eli5: 'Peter tells husbands: your wives are physically more vulnerable, so treat them with extra honor. They are co-heirs with you of salvation. If you don\'t honor them, God won\'t hear your prayers. Hierarchy and deep equality, in the same paragraph.'
  },
  {
    title: 'A helper fit for him',
    jurisdiction: 'Old Testament · Genesis',
    context: 'The second creation account, in the garden',
    year: -900,
    spectrum: 1,
    gesture: '*I will make him a helper fit for him.* The word *ezer* — helper — is most often used in the Hebrew Bible not of subordinates but of God himself. Here it is used of Eve.',
    body: 'Genesis 2:18–23 narrates the creation of Eve. The word translated "helper" — *ezer* — appears twenty-one times in the Hebrew Bible. Of those, sixteen refer to God as the helper of Israel. It is not a servile term. The qualifying phrase *kenegdo* ("fit for him" or "corresponding to him") indicates a counterpart, a match. Adam names her *ishshah* ("woman") and recognizes her as *bone of my bones and flesh of my flesh*, the strongest biblical expression of shared nature. Complementarian readers treat Genesis 2 as establishing a created order with Adam as head; egalitarian readers note that nothing in the text itself makes Adam the authority — he is created first, but "first created" does not carry rank anywhere else in scripture.',
    citation: 'Genesis 2:18–23.',
    link: 'https://www.biblegateway.com/passage/?search=Genesis+2%3A18-23&version=ESV',
    culture: 'Ancient Near Eastern creation myths — *Enuma Elish*, *Atrahasis*, the Sumerian *Eridu Genesis* — generally create humans to serve the gods (in *Atrahasis*, humanity is explicitly created as labor replacement for the lower gods). Genesis 2 uniquely creates the woman to solve the man\'s loneliness, and the human pair to relate to each other. The cultural novelty of the Hebrew account is the *relational* rather than *utilitarian* purpose of human pairing — one of the clearest theological counter-moves in the Hebrew creation material.',
    eli5: 'The word "helper" used for Eve is the same word the Bible uses most often for God. It doesn\'t mean junior assistant. Complementarian readers say Adam being made first makes him the head. Egalitarians say scripture never uses "made first" that way anywhere else.'
  },

  // ───────────── man as head (+2) ─────────────
  {
    title: 'The head of the woman is man',
    jurisdiction: 'New Testament · 1 Corinthians',
    context: 'Paul on head coverings in Corinthian worship',
    year: 55,
    spectrum: 2,
    gesture: '*The head of every man is Christ, the head of the woman is man, and the head of Christ is God.* The whole debate turns on one Greek word: *kephalē* — does "head" mean authority, or does it mean source?',
    body: '1 Corinthians 11:3 opens a contested passage on head coverings and prayer. The Greek word *kephalē* ("head") had at least two extended senses in ancient usage: *authority over*, and *source of* (as in the "head" of a river). Complementarian scholarship (Grudem, Piper, Ware) argues *kephalē* always carries authority; egalitarian scholarship (Cervin, Payne, Fee) argues it commonly meant source in Greek. The same verse, two readings. Either way Paul completes the thought eight verses later: *in the Lord, woman is not independent of man, nor man of woman* (v. 11). Whatever "head" means, Paul insists it does not mean independence-over.',
    citation: '1 Corinthians 11:3, 11–12.',
    link: 'https://www.biblegateway.com/passage/?search=1+Corinthians+11%3A3&version=ESV',
    culture: 'In Roman public culture, married women wore the *palla* draped over the head as a visible marker of respectable marriage; appearing in public without it signaled sexual availability. Corinthian Christian women prophesying without a head covering would have read, to Roman eyes in a city with a famous prostitution cult, as signaling loose sexual status. Paul\'s concern is at least partly about public signaling inside the Roman social imaginary of Corinth, not only about abstract gender theology.',
    eli5: 'The verse "the head of the woman is man" is where most of the debate sits. The Greek word for "head" can mean either "authority over" or "source of" (like the head of a river). Serious scholars read it both ways. Either way Paul qualifies eight verses later that neither sex is independent of the other.'
  },

  // ───────────── wives submit (+3) ─────────────
  {
    title: 'A woman\'s vow, her husband\'s veto',
    jurisdiction: 'Old Testament · Numbers',
    context: 'Moses at the plains of Moab, final legal instructions before the land',
    year: -1250,
    spectrum: 2,
    gesture: '*If a woman makes a vow to the LORD and her husband hears of it and says nothing, her vow stands. But if her husband makes it null and void on the day he hears it, her vow shall not stand.* A woman\'s direct religious commitment to God can be overridden by her father or her husband.',
    body: 'Numbers 30:3–15 lays out a legal framework in which a woman\'s vow to God stands only if the male head of her household does not veto it on the day he learns of it. An unmarried daughter\'s vow is subject to her father. A married woman\'s vow is subject to her husband. Only a widow\'s or divorced woman\'s vow stands without male review. The assumption is that a woman\'s direct relationship with God routes through a male legal guarantor. The passage survives into the rabbinic tradition as the source of extensive Mishnaic regulation (tractate *Nedarim*) and is the clearest Hebrew Bible text placing women\'s religious agency under male authority by statute.',
    citation: 'Numbers 30:3–15.',
    link: 'https://www.biblegateway.com/passage/?search=Numbers+30%3A3-15&version=ESV',
    culture: 'Code of Hammurabi §§128–137 and the Middle Assyrian Laws §A-36 through §A-40 include parallel provisions making a husband\'s consent required for a wife\'s legal or financial commitments. The Elephantine papyri (5th century BCE Egypt) preserve marriage contracts with similar clauses. Numbers 30 codifies as law what the surrounding ANE legal systems already had in place — the distinctively Israelite move is the religious dimension, that a vow to God can be vetoed by a human husband.',
    eli5: 'Under Numbers 30, a woman\'s direct religious vow to God is legally subject to her father or husband\'s veto on the day he hears of it. Widows and divorced women can vow freely. Married women and daughters need male approval. The Mishnah later built a whole tractate on this.'
  },
  {
    title: 'Male fifty shekels, female thirty',
    jurisdiction: 'Old Testament · Leviticus',
    context: 'Priestly Torah, redemption price for persons vowed to the sanctuary',
    year: -1200,
    spectrum: 2,
    gesture: 'When a person is dedicated to the LORD, the valuation is set by sex and age. *A male from twenty years old to sixty years old, fifty shekels of silver... and if it is a female, thirty shekels.* Forty percent less.',
    body: 'Leviticus 27:1–8 sets the redemption price for a person vowed to the sanctuary. The table runs by age and sex: an adult male is valued at fifty shekels; an adult female at thirty — a 40% differential. A male child (5–20) is valued at twenty; a female child at ten — a 50% differential. The passage is a redemption instrument (the money is the price if the vow is commuted, not a purchase), but its valuation table is the clearest numeric gender hierarchy in the Torah. Rabbinic tradition preserved the valuations literally; modern critical scholarship reads the differential as reflecting comparative wages in an agrarian economy — though even on that reading the asymmetry is theologically codified.',
    citation: 'Leviticus 27:1–8.',
    link: 'https://www.biblegateway.com/passage/?search=Leviticus+27%3A1-8&version=ESV',
    culture: 'Gendered compensation tables run throughout ancient Near Eastern law. Code of Hammurabi §§209–214 sets different compensation for injury to a man\'s daughter versus a man\'s slave versus a free man. Middle Assyrian Laws §A-50 through §A-59 preserve differentiated bride-price and injury payments. The 40–50% ratio in Leviticus 27 is roughly in line with the ratios preserved in contemporary Mesopotamian legal material. Israel\'s distinctive contribution was religious: the valuation is what you pay to redeem a vow, not to purchase a person.',
    eli5: 'If you dedicated yourself to the sanctuary and wanted to pay the redemption price instead, Leviticus 27 sets the table: an adult man costs fifty shekels, an adult woman thirty. Male children twenty, female children ten. A 40–50% discount on women across the board.'
  },
  {
    title: 'He shall rule over you',
    jurisdiction: 'Old Testament · Genesis',
    context: 'After the fall, outside the garden',
    year: -900,
    spectrum: 2,
    gesture: '*To the woman he said... your desire shall be for your husband, and he shall rule over you.* Part of a four-item list of consequences after the fall. Three of the four, Christians read as brokenness the gospel pushes against. The fourth gets read as design.',
    body: 'Genesis 3:14–19 names four consequences after the fall: the serpent condemned to crawl (v. 14), the woman given pain in childbirth and rule by her husband (v. 16), the ground cursed to grow thorns and thistles (v. 17–18), and death as the destination of all flesh (v. 19). Christian practice treats three of the four as brokenness the gospel is pushing against. Epidurals are uncontroversial. Weed killer is uncontroversial. The resurrection hope is the central claim of the faith. Only the fourth consequence — *he shall rule over you* — gets routinely read as divine design rather than diagnosis. The grammar of the passage gives no warrant for that selective reading; all four consequences are given in the same form, in the same breath, as the same kind of speech.',
    citation: 'Genesis 3:14–19.',
    link: 'https://www.biblegateway.com/passage/?search=Genesis+3%3A14-19&version=ESV',
    culture: 'Near Eastern etiological myths routinely explained gendered suffering as divine punishment: Pandora in Hesiod\'s *Works and Days* is made by the gods as a curse on men; Enki\'s consumption of Ninhursag\'s plants in the Sumerian material brings curse and intervention; Inanna\'s descent names loss as the cost of crossing boundaries. Genesis 3 follows the broader literary pattern of explaining present human conditions — pain, toil, death, hierarchy — through a primordial story of divine displeasure. The form is etiology; the question is whether any etiological curse reads as divine design.',
    eli5: 'After the fall, God lists four consequences: snakes crawl, childbirth hurts, the ground grows thorns, and the husband will rule over the wife. Christians don\'t preserve crawling snakes, refuse epidurals, or ban weed killer. Only the fourth one gets treated as a blueprint. That\'s selective reading, not exegesis.'
  },
  {
    title: 'Woman the glory of man',
    jurisdiction: 'New Testament · 1 Corinthians',
    context: 'Paul on head coverings in Corinthian worship',
    year: 55,
    spectrum: 2,
    gesture: '*Man is the image and glory of God, but woman is the glory of man. For man was not made from woman, but woman from man. Neither was man created for woman, but woman for man.* The most hierarchical lines in the Pauline corpus. Eight verses later Paul qualifies them out of existence.',
    body: '1 Corinthians 11:7–9 is the middle of the head-covering argument. The logic runs: Genesis 2 has woman made from man, and made *for* man. Therefore woman reflects man\'s glory; man reflects God\'s. Read on its own, the passage is the starkest statement of created-order hierarchy in the New Testament. The complication is that Paul himself refuses to stop there. Verses 11–12 reverse the logic: *nevertheless, in the Lord, woman is not independent of man, nor man of woman; for as woman came from man, so also man comes through woman; and all things come from God.* Paul gives the hierarchical argument, then takes it back. Complementarian readers emphasize verses 7–9 as the permanent teaching; egalitarian readers emphasize 11–12 as Paul\'s own qualifier. The passage reads as Paul arguing with himself in real time.',
    citation: '1 Corinthians 11:7–9; cf. 11:11–12.',
    link: 'https://www.biblegateway.com/passage/?search=1+Corinthians+11%3A7-12&version=ESV',
    culture: 'The hierarchical argument mirrors Aristotle\'s *Politics* Book I.5 almost exactly: the household has a natural ruler (the husband) and a natural ruled (the wife), by the order of creation. Stoic treatises (Musonius Rufus, Hierocles) made parallel arguments. In Corinth — where Greek philosophical schools were active and visible — Paul is deploying a familiar argument-form his readers would have recognized instantly. What\'s unusual is what he does four verses later: he stops, qualifies, and refuses to let the hierarchical logic stand alone.',
    eli5: 'Paul\'s sharpest hierarchical argument: woman was made from man and for man, so she reflects his glory; he reflects God\'s. Then four verses later Paul himself qualifies it: neither is independent of the other, and every man has come through a woman. He argues both sides in the same paragraph.'
  },
  {
    title: 'Wives, submit — as is fitting',
    jurisdiction: 'New Testament · Colossians',
    context: 'Paul writing from Roman imprisonment to the Colossian church',
    year: 62,
    spectrum: 2,
    gesture: '*Wives, submit to your husbands, as is fitting in the Lord. Husbands, love your wives, and do not be harsh with them.* The shortest of the household codes. Paired commands; no headship language.',
    body: 'Colossians 3:18–19 is the compressed parallel of Ephesians 5. No theological imagery of Christ and the church; no metaphor of headship. Just two verses: wives submit, husbands love, and specifically do not be embittered against your wives. The word *pikrainesthe* ("be harsh, bitter") is used nowhere else in Paul\'s household codes and suggests Paul is correcting a concrete pattern of marital harshness in the Colossian church. The household code is not abstract theology; it is pastoral triage.',
    citation: 'Colossians 3:18–19.',
    link: 'https://www.biblegateway.com/passage/?search=Colossians+3%3A18-19&version=ESV',
    culture: 'Colossae sat near Hierapolis and Laodicea in the Lycus Valley of Phrygia, a region famous for mixed Phrygian and Greek religion including the ecstatic Cybele and Magna Mater cults, which regularly pulled married women into overnight rites outside the household. Inscriptions from the region name female initiates and officiants in the Cybele cult. The household code\'s insistence on wifely submission *as is fitting in the Lord*, paired with husbands told not to be bitter, likely addresses a concrete local tension around women\'s religious absences and husbands\' reactive harshness.',
    eli5: 'Colossians gives a shorter version: wives submit, husbands love your wives and don\'t be harsh with them. The specific word for "harsh" is used nowhere else in the household codes — it sounds like Paul is addressing a real problem in that church with husbands being bitter toward wives.'
  },
  {
    title: 'Wives, submit to your husbands',
    jurisdiction: 'New Testament · Ephesians',
    context: 'Paul writing from Roman imprisonment to the Ephesian church',
    year: 62,
    spectrum: 2,
    gesture: '*Wives, submit to your own husbands, as to the Lord. For the husband is the head of the wife even as Christ is the head of the church.* The most-cited verse in evangelical complementarian preaching on marriage.',
    body: 'Ephesians 5:22–24 anchors the traditional argument for male headship in marriage. Read in isolation, it commands wifely submission; read with verse 21, the whole code is grammatically a specific form of "submitting to one another." Three more observations: verses 25–33 spend twice as many words telling husbands how to love their wives as verses 22–24 spend on wifely submission, with the pattern being Christ laying down his life; the verb "submit" is never addressed to husbands as something wives do to them — it is voluntary, not demanded; and the model of headship in the passage is self-giving death, not authority over. The code closes with its most asymmetric line: *let each one of you love his wife as himself, and let the wife see that she respects her husband* (v. 33). Paul\'s own summation names two verbs — *agapatō* (love) for the husband, *phobētai* (respect, literally "fear") for the wife. Whatever the mutual submission of v. 21 means, Paul\'s closing restatement pairs love-command with respect-command, not love-command with love-command.',
    citation: 'Ephesians 5:22–33.',
    link: 'https://www.biblegateway.com/passage/?search=Ephesians+5%3A22-33&version=ESV',
    culture: 'The Greco-Roman *paterfamilias* household had legal asymmetry: the husband\'s authority was unconditional, the wife\'s only formal defense was to return to her father\'s household with her *dos* (dowry). Paul\'s reframing of headship as *Christlike self-sacrifice* introduces a cultural category — authority expressed by dying for the one under you — that is alien to Roman household law. No Roman treatise on household authority, from Aristotle through Musonius Rufus, describes headship as self-giving death. The form of the code is Greco-Roman; the content is a Christological subversion.',
    eli5: 'The famous passage: wives submit, husbands love your wives as Christ loved the church. Twice as many words go to the husbands — and the pattern of "head" in the chapter is Christ dying for the church, not Christ ruling it. The closing line (v. 33) pairs *love* for the husband with *respect* (literally "fear") for the wife — an asymmetry even mutual-submission readings have to reckon with.'
  },
  {
    title: 'Wives, like Sarah, calling him lord',
    jurisdiction: 'New Testament · 1 Peter',
    context: 'Peter to Christians scattered across Asia Minor under Nero',
    year: 64,
    spectrum: 2,
    gesture: '*Wives, submit to your own husbands, so that even if some do not obey the word, they may be won by the conduct of their wives... as Sarah obeyed Abraham, calling him lord.* One verse before the honor-the-weaker-vessel command, Peter names Sarah calling Abraham *kyrios* as the pattern.',
    body: '1 Peter 3:1–6 is the wifely half of the household code that concludes at 3:7. Peter\'s instruction to Christian wives assumes many of them are married to non-Christian husbands (v. 1: *even if some do not obey the word*) and addresses the pastoral reality that conversion was splitting households. His counsel is to win the husband through conduct, not verbal confrontation. The appeal to Sarah calling Abraham *kyrios* is pulled from Genesis 18:12 — where Sarah uses the word privately in her thoughts, not as a formal address. Peter\'s use of it sharpens the deferential reading. The passage sits inside the same letter as the radical co-heir language of v. 7, and the tension is unresolved: the wife is *sunklēronomos* (co-heir) and also expected to address her husband as *kyrios*.',
    citation: '1 Peter 3:1–6; Genesis 18:12.',
    link: 'https://www.biblegateway.com/passage/?search=1+Peter+3%3A1-6&version=ESV',
    culture: 'The Roman household in the first century was legally asymmetric; a wife\'s religious conversion to a cult not shared by her *paterfamilias* could be grounds for divorce, financial ruin, or social exclusion. Tacitus and Pliny record cases of Christian wives whose husbands reported them to magistrates. Peter\'s pastoral directive — win your husband through quiet conduct rather than open confrontation — is written into this legal reality. The *kyrios* address for Sarah mirrors Roman conventions where slaves and clients addressed their patrons as *dominus*; Peter is assimilating the Christian wife\'s posture to the surrounding culture\'s deferential forms, while the letter\'s next verse names her a full co-heir of salvation.',
    eli5: 'Peter tells Christian wives — many of whom are married to non-Christians — to win their husbands through quiet conduct. He points to Sarah calling Abraham "lord" as the example. The next verse flips and tells husbands their wives are their co-heirs in salvation. The letter holds both at once.'
  },

  // ───────────── keep at home (+4) ─────────────
  {
    title: 'Marry, bear children, manage the house',
    jurisdiction: 'New Testament · 1 Timothy',
    context: 'Paul to Timothy on the widows\' roll at Ephesus',
    year: 65,
    spectrum: 3,
    gesture: '*I would have younger widows marry, bear children, manage their households, and give the adversary no occasion for slander.* Paul\'s prescribed domestic scope for Christian women, in the same letter as *I do not permit a woman to teach.*',
    body: '1 Timothy 5:3–16 addresses the church\'s enrolled widows — a kind of consecrated order receiving material support from the community. Paul restricts enrollment to widows over sixty (v. 9) and directs younger widows to leave the order, remarry, and focus on the household. Verse 14 names the prescription directly: *gamein, teknogonein, oikodespotein* — to marry, bear children, rule the house. The verb *oikodespotein* is unusual: the feminine-equivalent form of *oikodespotēs* ("master of the house"). Paul gives married women the master-of-the-house role at home, while the same letter (2:11–12) prohibits them from teaching or holding authority in the church. The two come together: the woman\'s domain is her household, not the assembly.',
    citation: '1 Timothy 5:9–16.',
    link: 'https://www.biblegateway.com/passage/?search=1+Timothy+5%3A9-16&version=ESV',
    culture: 'Augustus\'s marriage legislation (*Lex Julia de Maritandis Ordinibus*, 18 BCE and the *Lex Papia Poppaea*, 9 CE) mandated remarriage for widows under age 50 and penalized the unmarried through tax and inheritance disabilities. First-century Roman society expected remarriage as the default; Tacitus and Seneca both comment on the social pressure. Paul\'s instruction to younger widows to remarry and manage households aligns with the surrounding Roman expectation. The novelty is the role-word he chose: *oikodespotein* grants the woman formal authority over the household — a Greco-Roman legal category normally reserved for male heads.',
    eli5: 'Paul tells younger widows to leave the supported-widows order, remarry, have children, and run their households. He uses the feminine form of "master of the house" — giving them formal household authority — while the same letter bars them from authority in the church. Woman\'s domain is the home, not the assembly.'
  },
  {
    title: 'Husband of one wife',
    jurisdiction: 'New Testament · 1 Timothy · Titus',
    context: 'Paul to Timothy pastoring Ephesus; Titus pastoring Crete',
    year: 65,
    spectrum: 3,
    gesture: '*An overseer must be above reproach, the husband of one wife.* The Greek — *mias gunaikos andra*, "a one-woman man" — is cited as the main scriptural basis for restricting pastoral office to men.',
    body: '1 Timothy 3:2 and Titus 1:6 list qualifications for *episkopos* (overseer, elder). The phrase *mias gunaikos andra* is literally "a one-woman man." Complementarian readers argue the male gender of the qualification is definitional: elders must be men. Egalitarian readers argue the phrase is a fidelity requirement (one wife, not many; not a divorcee; not a philanderer) in a culture where polygamy and concubinage were common, and that it no more requires elders to be male than it requires them to be married — Paul himself was not. Church polity has divided on this verse for two thousand years.',
    citation: '1 Timothy 3:1–7; Titus 1:5–9.',
    link: 'https://www.biblegateway.com/passage/?search=1+Timothy+3%3A1-7&version=ESV',
    culture: 'Roman elite males frequently kept one legal wife plus concubines; Greek elite males had one wife plus acknowledged *hetairai* and household slaves. Augustus\'s marriage laws (*Lex Julia de Adulteriis Coercendis* and *Lex Julia de Maritandis Ordinibus*, 18 BCE) had tried to enforce marital fidelity and childbearing among the senatorial class and had largely failed — contemporary satire (Juvenal, Martial) documents the ongoing scandal. *Mias gunaikos andra* ("a one-woman man") was first a pointed rebuke of a widely-tolerated male sexual custom, only secondarily an office qualification.',
    eli5: 'Paul says an elder must be "a one-woman man." Conservative readers say that means elders must be male. Others say it\'s a fidelity requirement — one wife, not many — the same way it doesn\'t require elders to be married (Paul wasn\'t).'
  },

  // ───────────── women silent (+5) ─────────────
  {
    title: 'From a woman sin began',
    jurisdiction: 'Deuterocanon · Sirach',
    context: 'Ben Sira writing wisdom literature in Jerusalem, before the Maccabean revolt',
    year: -180,
    spectrum: 3,
    gesture: '*From a woman sin had its beginning, and because of her we all die.* Not in the Protestant canon. In the Catholic and Orthodox canons, and quoted by every church father who shaped the Western view of women.',
    body: 'Sirach (Ecclesiasticus) is the writing of Jesus ben Sira, a Jerusalem sage, around 180 BCE. The book is part of the Septuagint — the Greek Jewish scriptures the early church used as its Old Testament — and is received as canonical in the Roman Catholic, Eastern Orthodox, and Ethiopian Orthodox traditions, and as non-canonical but useful by Anglican and Lutheran traditions. Protestant Bibles generally omit it. Sirach 25:24 pins the entrance of sin and death onto Eve specifically, a reading Paul himself does not use (Paul consistently names Adam as the source in Romans 5 and 1 Corinthians 15). The verse\'s influence runs through patristic theology: Tertullian calls woman *diaboli ianua* ("the devil\'s gateway") in a passage that reads as a gloss on Sirach; Chrysostom, Augustine, and Jerome all echo the line. More of the Christian teaching against women\'s leadership draws its emotional force from Sirach 25:24 than from Genesis 3:16.',
    citation: 'Sirach 25:24. Cf. Tertullian, *On the Apparel of Women* 1.1; Augustine, *On Genesis Against the Manichees* 2.19.',
    link: 'https://www.biblegateway.com/passage/?search=Sirach+25%3A24&version=NRSVA',
    culture: 'Second Temple Judaism produced several texts blaming Eve for the entrance of sin: Sirach 25:24, 2 Enoch 30:17–31:6, and the *Life of Adam and Eve*. Contemporary Hellenistic culture was working through a parallel argument about Pandora in Hesiod\'s *Works and Days* as the gendered origin of human suffering. The two traditions cross-fertilized in Alexandrian Judaism. Sirach\'s contribution was to authorize the reading within a Jewish wisdom-literature genre; from there it passed into Christian patristic thought, where it did most of its actual work. The verse is short, vivid, and quotable — and for roughly fifteen hundred years it did more theological damage than Genesis 3 ever did on its own.',
    eli5: 'Not in the Protestant canon, but in the Catholic and Orthodox canons, and shaping Christian theology for fifteen centuries. Ben Sira blames Eve for the entrance of sin and death — a move Paul does not make. Most of the church fathers\' most hostile rhetoric about women (Tertullian\'s "devil\'s gateway," etc.) draws from this verse, not from Genesis 3.'
  },
  {
    title: 'Let the women keep silent',
    jurisdiction: 'New Testament · 1 Corinthians',
    context: 'Paul on orderly worship in the Corinthian assembly',
    year: 55,
    spectrum: 3,
    gesture: '*Let the women keep silent in the churches. For they are not permitted to speak, but should be in submission, as the Law also says. If there is anything they desire to learn, let them ask their own husbands at home.*',
    body: '1 Corinthians 14:34–35 flatly prohibits women from speaking in the assembly. Four interpretive options dominate the scholarship. First, in the same letter (1 Cor 11:5) Paul assumes women are prophesying in church and only regulates how they dress while doing so — a flat contradiction with "let them keep silent," suggesting either self-contradiction or that Paul is quoting a position he is countering. Second, "as the Law also says" is unusual for Paul and points to no specific text, which some read as a sign he is quoting an opposing slogan rather than legislating. Third, some early manuscripts and the Western textual tradition place these two verses after verse 40 rather than at 34–35, raising the possibility of a marginal gloss later absorbed into the text. Fourth — the reading associated with Kenneth Bailey, Craig Keener, and Gordon Fee — the passage is a narrow pastoral directive to the wives of prophets in the context of prophetic weighing (v. 29: *let the others weigh what is said*). The Greek *gynaikes* can mean "women" or "wives"; paired with *tous idious andras* ("their own husbands") in v. 35, the "wives" reading is natural. A wife publicly challenging her husband\'s prophecy during the assembly\'s weighing would read, in an honor-shame culture, as a marital fracture on display — damaging the marriage and the credibility of the teaching office in one gesture. Paul\'s instruction on this reading is not silencing women generally (11:5 already has them prophesying freely) but restricting wives from publicly weighing their own husbands\' prophetic speech in the service. Take it home.',
    citation: '1 Corinthians 14:34–35; cf. 1 Corinthians 11:5; 14:29.',
    link: 'https://www.biblegateway.com/passage/?search=1+Corinthians+14%3A34-35&version=ESV',
    culture: 'Corinthian religion included ecstatic female prophecy in the cults of Dionysus and Isis. The city\'s public reputation was notorious — the Greek verb *korinthiazomai* ("to act like a Corinthian") meant to behave promiscuously, and Aristophanes used it as shorthand for sexual scandal. In a city with that reputation, charismatic gender-mixed Christian worship — women speaking in tongues, prophesying, and weighing prophecy — would have been read by outside observers through the local lens of ecstatic cult chaos. Honor-shame logic in the Mediterranean also made public marital disagreement uniquely damaging; a wife publicly contradicting her husband in the assembly would shame both. The restriction reads as triage for a specific public-relations problem in a reputationally notorious city, not as a universal ecclesiology.',
    eli5: 'Paul says women should be silent in church. But three chapters earlier in the same letter he assumed women were prophesying in church. Four options: he contradicts himself, he\'s quoting a view he\'s countering, the two verses are a later insertion, or — the most context-sensitive reading — it\'s specifically about wives of prophets: don\'t publicly weigh your own husband\'s prophecy during the service; take the disagreement home.'
  },
  {
    title: 'I do not permit a woman to teach',
    jurisdiction: 'New Testament · 1 Timothy',
    context: 'Paul to Timothy pastoring Ephesus, a city of Artemis',
    year: 65,
    spectrum: 3,
    invert: true,
    gesture: '*I do not permit a woman to teach or to exercise authority over a man; rather, she is to remain quiet.* The single most-cited verse in the case against women in the pulpit or the elder board.',
    body: '1 Timothy 2:11–15 is the clearest prohibition in the New Testament. Three observations sit at the center of the debate. First, the verb *epitrepō* ("I permit") is in the present tense and can mean "I am not presently permitting" — a particular pastoral ruling, not a universal command. Second, the prohibited behavior is paired: teach AND exercise authority over. The rare Greek verb *authentein* ("exercise authority") appears **nowhere** else in the New Testament and is used in extrabiblical Greek with a wide range of meanings from "domineer" to "murder" to "assume authority without warrant." Third, verses 13–14 ground the prohibition in the creation order ("Adam was formed first") — a reason complementarian readers take as binding across eras, and egalitarian readers take as addressing a specific problem at Ephesus where some women were teaching a version of proto-Gnostic theology that reversed the Genesis story. On this one verse the question of women in church office has divided Protestantism for five hundred years.',
    citation: '1 Timothy 2:11–15.',
    link: 'https://www.biblegateway.com/passage/?search=1+Timothy+2%3A11-15&version=ESV',
    culture: 'Ephesus was home to the Temple of Artemis — one of the seven wonders of the ancient world — served by a college of female priestesses (the *Melissae*) under a theology that inverted the Genesis creation order (Artemis as the divine first mother, humans as her offspring, fertility mediated through women). First-century Asia Minor also saw the emergence of proto-Gnostic movements that claimed Eve was created first and was the bearer of knowledge, with Adam derivative from her. The verse\'s explicit correction — *Adam was formed first, then Eve* (v. 13) — reads more naturally as a targeted counter to specific Ephesian theological claims than as a general rule about all women everywhere. Nearly two thousand years later, in October 2023, Pope Francis for the first time seated women as voting members at a synod of bishops — fifty-four women, among three hundred sixty-five voters, at the Synod on Synodality in Rome. Before that, women attended synods only as auditors and advisors, without a vote. The change required an explicit papal decree. The verse above is why it took that long.',
    eli5: 'The verse that settles it for many churches: "I do not permit a woman to teach or have authority over a man." Three debates: whether the present-tense verb means "this one time" or "always"; what the rare word for "authority" actually meant; and whether the reason given ("Adam was made first") is a universal principle or a local argument against a specific wrong teaching. The receipt: the Catholic church did not let a woman vote at a synod of bishops until October 2023. Two thousand years. One verse.'
  }
];

// Sort left→right by spectrum, ties broken by year ascending.
const sorted = [...raw].sort((a, b) => {
  if (a.spectrum !== b.spectrum) return a.spectrum - b.spectrum;
  return a.year - b.year;
});

export const flat = sorted.map((s, i) => {
  const num = String(i + 1).padStart(2, '0');
  return { ...s, num, orderIndex: i };
});

export const SPECTRUM_MIN = -3;
export const SPECTRUM_MAX = 3;
export const YEAR_MIN = Math.min(...flat.map((s) => s.year));
export const YEAR_MAX = Math.max(...flat.map((s) => s.year));

export function next(num) {
  const i = flat.findIndex((s) => s.num === num);
  return i >= 0 && i < flat.length - 1 ? flat[i + 1] : null;
}

export function prev(num) {
  const i = flat.findIndex((s) => s.num === num);
  return i > 0 ? flat[i - 1] : null;
}
