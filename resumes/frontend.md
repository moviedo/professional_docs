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
	ul, ol {
		margin-left; 0;
		margin-right; 0;
		padding-left; 0;
		padding-right; 0;
	}

	.parent-container {
		display: flex;
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
	<section class="parent-container">
		<h2 style="flex-grow: 1;" class="secondary">Skills</h2>
		<ul style="flex-grow: 3;">
			<ol>
				<strong>Proficient in:</strong> JavaScript, Vuejs, Angularjs, Webpack, Sass, Less, CSS, Git
			</ol>
			<ol>
				<strong>Experienced with:</strong> TypeScript, Angular, Python, Django, BackboneJS
			</ol>
			<ol>
				<strong>Familiar with:</strong> Reactjs, Erlang, Elixir, Phoenix
			</ol>
		</ul>
	</section>
</body>
