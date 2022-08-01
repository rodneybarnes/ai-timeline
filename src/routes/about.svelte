<script lang="ts">
	import Header from '$lib/components/Header.svelte';
</script>

<div class="min-h-screen bg-zinc-900 flex flex-col items-center">
	<Header link='/' linkText='Home' />
	<div class="max-w-4xl text-white text-lg indent-12">
		<p>
			Today we are awash in self-aggrandizing stories about an AI revolution. When its story is
			told, it is often laid out as a chronicle—a timeline—of discoveries. Google gets better
			translation out of its GPUs in 2008; convolutional neural networks outperform other approaches
			to recognition of images on Imagenet. Great men made great discoveries in great labs.<a
				href="#footnote_1"><sup>1</sup></a
			>
		</p>
		<p>
			It all feels very transcendent, but it is a funded transcendence. Without masses of free data
			harvested from commercial social media and search engines, from policing, and from government
			and university data collection, there would be no corpora in 2007 for the breakthrough in
			using GPUs for image recognition, and no Imagenet in 2012 for a breakthrough in image
			recognition.<a href="#footnote_2"><sup>2</sup></a> It's not just the free data. In the 1990s, computer
			scientists were still beholden to university ethics boards that required consent for people to
			be included in data sets. That seems to no longer be the case.<a href="#footnote_3"><sup>3</sup></a>
		</p>
		<p>
			AI is much more than data. Corporations and governments have been working diligently to make
			some kind of AI revolution happen. In Tio'tia:ke (so-called Montreal), from where we write,
			there is a deliberate plan for AI to transform our city. But not in the way the tale is
			usually told: our streets are not full of self-driving cars, and more, rather than fewer,
			knowledge workers are being hired. We can't name any industries or bureaucracies in Montreal
			that can be said to be more efficient or effective from the standpoint of workers, users, or
			customers because of AI. But investment in AI has helped to reshape neighbourhoods and
			universities, raising rents, siphoning public funds into private hands, and refashioning the
			stories the city tells about itself.<a href="#footnote_4"><sup>4</sup></a>
		</p>
		<p>
			In the history of science and technology, scholars will refer to histories as internalist or
			externalist. An internalist history is a history based on the stories actors tell about their
			own actions. An externalist history uses frameworks and stories that differ from those of the
			people and institutions whose story is told. The vast majority of the published timelines of
			AI on the internet right now are internalist stories: they are stories about engineering and
			computer science, written by engineers and computer scientists, emphasizing the worldviews
			promoted by those disciplines. These histories can still be critical, as when scholars frame
			the political problems of AI as “ethical” issues raised by the technology.<a href="#footnote_5"
				><sup>5</sup></a
			>
		</p>
		<p>
			We have a growing number of externalist stories about AI available on the open internet, and
			many more in books and behind the digital paywalls of scholarly journals. Still there are
			others who straddle internalist and externalist approaches by critically examining the
			development of AI but from within.<a href="#footnote_6"><sup>6</sup></a> But what would a critical timeline
			look like? When a timeline appears before you, one event happens, then another, then another. The
			“line” implies a model of history as unidirectional. The events listed in sequence appear in third
			person: “it was done on this date.”
		</p>
		<p>
			On a timeline, names, dates, places appear as objective facts devoid of context, not because
			they are objective facts but because the timeline itself gives no context other than that of
			linear time. A visual timeline is supposed to help the reader sort out events in sequence, and
			usually implies causality—one thing is not possible without those preceding it. It uses time
			to give order to an otherwise chaotic-appearing cluster of events. Maybe the line in the
			timeline is the problem. If the only possible relationship in a timeline is one of sequence,
			then we are stuck telling stories of historical accumulation, one thing after another.<a
				href="#footnote_7"><sup>7</sup></a
			>
		</p>
		<p>Or are we?</p>
		<p>
			Timelines generally work like this because their implied contexts are common-sensical. They
			are, in a word, stories of the powerful told from the perspectives of the powerful. What would
			a timeline of AI look like if it spoke of the powerful, but did not affirm their perspective?
			This is our attempt to find out.
		</p>
		<p>
			Our first step was to put the timeline in a place. The history of artificial intelligence is
			an international history to be sure, but histories always happen differently in different
			locations. The oft-told story about Google and GPUs sounds like a global discovery, but it
			happened in Silicon Valley, with all the mythmaking that goes alongside that particular place
			name. We decided to do a history from the perspective of where we are. Although Montreal is
			today touted as a global hub of artificial intelligence research, with its institutes,
			observatories, and ethics-washing, there is no necessary reason why that had to come to pass.<a
				href="#footnote_8"><sup>8</sup></a
			>
			It was not a foregone conclusion, and of course Montreal is just one city among many that claims
			to be a global centre of AI.
		</p>
		<p>
			So why Montreal? To answer that question, we need to ask what AI is and what makes AI
			possible. AI is not just a technology or a set of ideas. As it is referred to in commercial
			and policy texts, most Artificial Intelligence is really rebranded machine learning, which
			describes only one subset of approaches to the field of artificial intelligence in Computer
			Science. Why was machine learning rebranded as AI? We can point to several possibilities: 1)
			it is catchier and sounds more impressive; 2) in the 21st century, every few years the tech
			industry rebrands what it is doing under a new name (Web 2.0 and 3.0, social media, big data,
			AI). So the AI revolution is not just a technological revolution; it is just as much a change
			in an industry's practice of self-representation.
		</p>
		<p>
			AI is also a set of technologies, practices, ideas, networks, and practices. To borrow a term
			from cultural theory and contemporary art, it is a giant assemblage, made up of many different
			kinds of things gathered together and working in concert. In their Anatomy of an AI System,
			Kate Crawford and Vladen Joler show that something as simple as an Amazon Echo relies on
			elaborate divisions of labour—paid and unpaid, over- and under-compensated—collection and
			processing of data, global logistics, knowledge repositories, and intersecting communication
			networks. At the beginning and end of their map is the appropriation and quantification of
			nature, which turns the land into a set of resources that can be built into the Echo and that
			will eventually turn into e-waste that will return to the Earth.
		</p>
		<p>
			Thus, any story about AI in Montreal needs to begin with the land. This is where we begin, and
			ultimately where the story of AI will one day end. The wealth of Montreal comes from settlers'
			expropriation of the land from Indigenous people who predate their arrival. One of Montreal's
			most attractive features for the AI industry descends directly from this foundational
			aggression: bountiful and cheap hydropower. AI systems consume a great deal of energy; data
			centres need both electricity and cooling. Cheap hydropower is two solutions in one.
		</p>
		<p>
			A second part of the story involves policies, plans, programs, and governmental desires for
			Montreal. The story of AI is interleaved with Montreal's own economic development, all the way
			back to its initial settlement and later colonization. Late 20th century plans for economic
			redevelopment and investment in creative industries can't be separated from the economic
			fallout of the 1995 referendum. Plans for Montreal as an AI hub cannot be separated from waves
			of urban planning and gentrification, and policy and tax initiatives aimed at attracting
			so-called “tech” businesses (at the cost of not supporting other kinds of technology).
		</p>
		<p>
			A third part of the story involves corporations moving into Montreal and building
			infrastructure, which would not be possible without the policy structures in place. All of the
			institutions in Montreal's current AI “ecosystem” (a metaphor that should raise some
			suspicion) are here because of a cheap power, a favorable policy environment, and an existing
			business climate that allowed them to buy or “acquire” their way into the city by building on
			existing businesses in the tech and gaming sectors. Google, Microsoft, Facebook, and MILA,
			along with Montreal's AI observatories and “ethics” statements would not be here if not for a
			climate built to attract them; one in which they are comfortable operating.
		</p>
		<p>
			It is only once all of these things are in place that the discoveries, ideas, and work of
			computer scientists becomes meaningful. The intellectual history or inner workings of AI may
			feel transcendent to some, but it depends on a vast net of mundane interdependencies.<a
				href="#footnote_9"><sup>9</sup></a
			>
		</p>
		<h3>How we made the timeline</h3>
		<p>
			To find how Montreal came to be seen as an “AI hub” today, we had to dive into the past. AI—as
			well as what counts as “the development of AI”—is constantly changing. Our timeline includes
			rebrandings, acquisitions, policies, technologies, announcements, plans, and countless other
			actions, all of which can be hard to track. Some things were easier to research than others;
			some things we have to leave implicit even though they cast a bigger shadow on the timeline
			than they appear.
		</p>
		<p>
			To create this timeline, we identified concrete events where a development in artificial
			intelligence could be linked to Montreal. We interpreted a link to Montreal broadly:
			environmental, infrastructural, institutional, and human resources all were extracted and
			deployed for different social and technical purposes at different times.
		</p>
		<p>
			More specifically, we used a grounded approach to create a list of relevant resources found
			through searches of secondary material, including news articles, social media posts, scholarly
			works, as well as grey literature such as corporate and organizational websites and government
			or quasi-government online announcements and blog posts. We collaboratively reviewed each item
			found to determine its relevance, drafted descriptions, developed categories, and designed a
			timeline interface. All of our choices were aimed at demonstrating that it was not inevitable
			that Montreal would come to be seen as an AI hub.
		</p>
		<p>We tagged our entries according to the following categories:</p>
		<ul class="list-disc list-inside ml-12 -indent-6">
			<li>Colonization</li>
			<li>Government initiatives</li>
			<li>Private sector initiatives</li>
			<li>Natural resource extraction</li>
			<li>Pushback and activism</li>
			<li>White men</li>
			<li>Infrastructure</li>
			<li>Gentrification</li>
			<li>Ethics-washing</li>
		</ul>
		<p>
			We aimed for a relatively “flat” set of categories, with the goal of grouping events
			politically. Many entries are listed in more than one category; this is a feature of our
			scheme, not a bug. While our categories are big and relatively straightforward, a few
			specifications are in order:
		</p>
		<ul class="list-disc list-inside ml-12 -indent-6">
			<li>
				'Colonization' and 'Natural resource extraction' are important because they are entirely
				left out of most AI timelines, yet the current AI industry as we know it would not be
				possible without them.
			</li>
			<li>
				'Government initiatives' include “public sector” institutions like education, since their
				resources come from the government. Public-private partnerships, as well as institutions
				like CIFAR that benefit from private investment alongside public money, are listed under
				both Government initiatives and Private sector initiatives.
			</li>
			<li>
				We also felt it was important to distinguish 'Ethics-washing' from 'Pushback and activism':
				Ethics-washing represents AI-industrial attempts to self-regulate or claim that what they
				are doing is ethical; Pushback and activism are initiated by people affected by the actions
				carried out in the name of AI—people in the industry may work in solidarity with them, but
				in general affected communities and activists are not necessarily concerned with the
				industry performing certain notions of “ethics” so much as justice.
			</li>
			<li>
				'White men' was meant to highlight issues of race and gender, but inversely from the usual
				approach of naming groups marginalized by AI organizations, practices, and technologies.
				Instead, we wanted to highlight the constitutive role played by white men in the industry
				and to suggest that they are just as local and specific as the Indigenous peoples fighting
				for water rights stolen by the Canadian state.
			</li>
			<li>
				'Infrastructure' and 'Gentrification' show that AI always has to go somewhere, and often at
				a significant cost to someone and to certain communities.
			</li>
			<li>
				We tried to avoid building our categories around the usual AI timeline defaults: findings,
				foundings, 'fathers', and famous firsts. While those things do come up, we tie them to the
				kinds of institutions and issues they represent for us.
			</li>
		</ul>
		<p>
			Any classification scheme is heuristic and imperfect. You are welcome to invent your own. Like
			all histories, ours is an experiment in representation. The difference is that we admit it up
			front.
		</p>
		<p>
			The next time you see a timeline of achievements in AI, ask whose stories are being told and
			whose are being left out.
		</p>
		<h2>Bios</h2>
		<h3>Jonathan Sterne</h3>
		<p class="-indent-0">
			Jonathan Sterne (he/they) teaches at McGill University. He is author of <em
				>Diminished Faculties: A Political Phenomenology of Impairment</em
			>
			(2021), <em>MP3: The Meaning of a Format</em> (2012), and
			<em>The Audible Past: Cultural Origins of Sound Reproduction</em>
			(2003) as well as many articles on media, technology and the politics of culture. This timeline
			is part of his SSHRC-funded project “The New Sound and Look of Culture: Artificial Intelligence
			and the Politics of Culture,” and it part of a series of coauthored projects on the politics of
			machine learning. Visit his website at
			<a href="https://sterneworks.org">https://sterneworks.org</a> to learn more about his work.
		</p>
		<h3>Laine McCrory</h3>
		<p class="-indent-0">
			Laine McCrory (she/her) is an undergraduate student at McGill University. She is entering her
			final year pursuing a Joint Honours Program in Political Science and Gender, Sexuality,
			Feminist and Social Justice Studies, with a minor in Communication Studies. She works at the
			intersections of sexuality, feminism, and technology, and although new in the field, she hopes
			to promote accessible knowledge for all. Laine is also working on her senior thesis, which
			focuses on the politics of surveillance technology and its impacts on building the “feminist
			city”.
		</p>
		<h3>Yuan Stevens</h3>
		<p class="-indent-0">
			Yuan (“You-anne”) Stevens (she/they) is a legal and policy expert focused on sociotechnical
			security and human rights. She works towards a world where powerful actors—and the systems
			they build—are held accountable to the public, especially when it comes to vulnerable or
			marginalized people. She obtained her JD/BCL from McGill University in 2017 and is a LL.M
			Candidate and research affiliate at the Centre for Law, Technology and Society at the
			University of Ottawa. Visit her website at <a href="www.yuanstevens.org"
				>www.yuanstevens.org.</a
			>
		</p>
		<h3>Rodney Barnes</h3>
		<p class="-indent-0">
			Rodney Barnes (he/him) is a software developer based out of Hamilton, Ontario. He graduated
			from the 'Computer Systems Technician - Software Support' program at Mohawk College in 2019.
			You can view more of his work at <a href="https://github.com/rodneybarnes"
				>https://github.com/rodneybarnes</a
			>
		</p>
		<hr class="mt-10" />
		<h3>Footnotes</h3>
		<p id="footnote_1" class="footnote">
			<span class="not-italic">1.</span> As of May 2022, the
			<a href="https://en.wikipedia.org/wiki/History_of_artificial_intelligence">Wikipedia entry</a>
			for history of AI gives the internalist story. Other examples include this
			<a href="https://sitn.hms.harvard.edu/flash/2017/history-artificial-intelligence/"
				>blog entry</a
			>
			from Harvard, the very incomplete
			<a href="https://www.g2.com/articles/history-of-artificial-intelligence"
				>Complete History of AI</a
			>, and books like Michael Wooldridge's
			<em
				><a
					href="https://us.macmillan.com/books/9781250770738/abriefhistoryofartificialintelligence"
					>A Brief History of Artificial Intelligence: What It Is, Where We Are, and Where We Are
					Going.</a
				></em
			>
		</p>
		<p id="footnote_2" class="footnote">
			<span class="not-italic">2.</span> Rajat Raina, Anand Madhavan, and Andrew Ng,
			<a href="http://www.machinelearning.org/archive/icml2009/papers/218.pdf"
				>“Large-scale Deep Unsupervised Learning using Graphics Processors”</a
			>; Alex Krizhevsky, Ilya Sutskever, Geoffrey E. Hinton, “<a
				href="https://proceedings.neurips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf"
				>ImageNet Classification with Deep Convolutional Neural Networks.</a
			>”
		</p>
		<p id="footnote_3" class="footnote">
			<span class="not-italic">3.</span> For more on data acquisition, see, e.g., Kate Crawford,
			<em><a href="https://yalebooks.yale.edu/book/9780300209570/atlas-ai/">Atlas of AI</a></em>;
			Dylan Mulvin,
			<em
				><a href="https://mitpress.mit.edu/books/proxies"
					>Proxies: The Cultural Work of Standing In</a
				></em
			>
		</p>
		<p id="footnote_4" class="footnote">
			<span class="not-italic">4.</span> See e.g., Guillaume Hébert et al's
			<a
				href="https://iris-recherche.qc.ca/publications/financer-lintelligence-artificielle-quelles-retombees-economiques-et-sociales-pour-le-quebec/"
				>Financer l'intelligence artificielle, quelles retombées économiques et sociales pour le
				Québec?</a
			>; Ana Brandusescu’s
			<a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4089932"
				>Artificial Intelligence Policy and Funding in Canada: Public Investments, Private Interests</a
			>; the CBAR Network in Parc-Extension’s
			<a
				href="https://communityactionresearchparcex.ca/projects/digital-divides-the-impact-of-montreals-ai-ecosystems-on-parc-extension-housing-environment-and-access-to-services-april-2022/"
				>Digital Divides - The Impact of Montreal's AI Ecosystems on Parc Extension: Housing,
				Environment and Access to Services. April 2022</a
			>; Jonathan Roberge, Kevin Morin, Marius Senneville,
			<a href="https://espace.inrs.ca/id/eprint/10470/"
				>Deep Learning’s Governmentality: The Other Black Box</a
			>.
		</p>
		<p id="footnote_5" class="footnote">
			<span class="not-italic">5.</span> See e.g.,
			<a href="https://onlinelibrary.wiley.com/doi/10.1111/1758-5899.12965"
				>Emerging Consensus on ‘Ethical AI’: Human Rights Critique of Stakeholder Guidelines</a
			> by Sakiko Fukuda‐Parr and Elizabeth Gibbon.
		</p>
		<p id="footnote_6" class="footnote">
			<span class="not-italic">6.</span> A prominent work that examines the development of AI from
			within includes Joy Buolamwini and Timnit Gebru’s landmark piece,
			<a href="https://proceedings.mlr.press/v81/buolamwini18a/buolamwini18a.pdf"
				>Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification</a
			>. See also
			<a href="https://journals.sagepub.com/doi/full/10.1177/2053951720919968"
				>How to Translate Artificial Intelligence? Myths and Justifications in Public Discourse</a
			> by Jonathan Roberge, Marius Senneville, Kevin Morin.
		</p>
		<p id="footnote_7" class="footnote">
			<span class="not-italic">7.</span> Timelines are like chronicles, where events appear to “give
			themselves” without any enclosed narrative. But as Hayden White argues, chronicles seem to
			aspire to narrative, while not giving any kind of narrative closure; they just end. The
			difference in a timeline is that if it leads all the way to the present, it can give the
			impression of closure where the present is the culmination of all that has come before it. See
			Hayden V. White’s
			<em
				><a href="https://www.press.jhu.edu/books/title/2540/content-form"
					>The Content of the Form: Narrative Discourse and Historical Representation</a
				></em
			>.
		</p>
		<p id="footnote_8" class="footnote">
			<span class="not-italic">8.</span> For examples of texts that have declared Montreal as an AI
			hub, see
			<a
				href="https://www.forbes.com/sites/peterhigh/2017/11/06/why-montreal-has-emerged-as-an-artificial-intelligence-powerhouse/?sh=622de30f23bd"
				>Why Montreal Has Emerged As An Artificial Intelligence Powerhouse</a
			>,
			<a
				href="https://www.investquebec.com/international/en/secteurs-activite-economique/technologies-information-communications/Montreal-s-Artificial-Intelligence-Hub.html"
				>Montréal's Artificial Intelligence Hub</a
			>
			by Investissement Québec,
			<a
				href="https://montrealgazette.com/news/local-news/artificial-intelligence-expert-moves-to-montreal-because-its-an-ai-hub"
				>Artificial Intelligence Expert Moves to Montreal Because it's AI Hub</a
			>
			in the Montreal Gazette,
			<a
				href="https://recherche.umontreal.ca/english/strategic-initiatives/montreal-declaration-for-a-responsible-ai/"
				>Montreal Declaration for a Responsible Development of Artificial Intelligence</a
			> now hosted by the Université de Montréal.
		</p>
		<p id="footnote_9" class="footnote">
			<span class="not-italic">9.</span> See e.g., Ana Brandusescu’s
			<a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4089932"
				>Artificial Intelligence Policy and Funding in Canada: Public Investments, Private Interests</a
			>.
		</p>
		<div class="pb-20"></div>
	</div>
</div>
