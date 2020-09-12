<style>
	body {
		background: white;
		color: black;
	}

	.primary {
		color: rgb(55, 89, 147);
	}
	.secondary {
		color: rgb(54, 126, 127);
	}

	.size-large {
		font-size: 30px;
	}
	h2 {
		text-transform: uppercase;
		font-size: 18px
	}

	section {
		margin: 20px 20px;
	}
	address {
		font-style: normal;
	}

	.flex-container {
		display: flex;
	}
	.title-container {
		display: flex;
		justify-content: space-between;
	}
	.grow1 {
		flex-basis: 25%;
	}
	.grow3 {
		flex-basis: 75%;
	}

	ul {
		padding: 0;
	}
	li {
		list-style: none;
	}
</style>

<body>
	<section>
		<address>
			<strong class="primary size-large">Mauro Oviedo</strong><br/>
			<br>
			<a href="https://github.com/moviedo">
				github.com/moviedo
			</a>
		</address>
	</section>
	<section class="flex-container">
		<h2 class="secondary grow1">Skills</h2>
		<ul class="grow3">
			<li>
				<strong>Proficient in:</strong> JavaScript, Vuejs, Git, Vagrant, Ansible
			</li>
			<li>
				<strong>Experienced with:</strong> Python, Django, Postgres, PostGIS, AWS, Jenkins, Travis-CI
			</li>
			<li>
				<strong>Familiar with:</strong> Reactjs, Erlang, Elixir, Phoenix
			</li>
		</ul>
	</section>
	<section class="flex-container">
		<h2 class="secondary grow1">Experience</h2>
		<div class="grow3">
			<div class="title-container">
				<span>Zipari, New York, NY</span><span>Mar 2015 – Present</span>
			</div>
			<div>
				Full-Stack Developer
			</div>
		</div>
	</section>
	<section class="flex-container">
		<h2 class="secondary grow1">Education</h2>
		<div class="grow3">
			<div class="title-container">
				<span>The City College of New York</span><span>New York, NY</span>
			</div>
			<div>
				<i>Bachelor of Science</i>, Computer Science
			</div>
		</div>
	</section>
</body>
