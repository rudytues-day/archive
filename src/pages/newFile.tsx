import Layout from '../layouts/Layout.astro';
import CardH from '../components/CardH.astro';
import Footer from '../components/Footer.astro';
import Sidebar from "../components/Sidebar.astro";

<Fragment>
<Layout title="RUDY TUESDAY'S ART LOG">

{/** <Header /> */}

<h1>{`RUDY TUESDAY'S ART LOG`}</h1>

<main>
<Sidebar />
{/** <ul role="list" class="card-masonry">
        <CardV
            href="https://docs.astro.build/"
            title="mapped some tags"
            date="00/00/00"
            text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            tags=\\{["rudy tuesday", "webmaster", "most excellent", "javascript moment"]\\}
        />

        <CardV
            href="https://docs.astro.build/"
            title="GOD AMONG MEN"
            date="00/00/00"
            text="congue nisi vitae suscipit tellus"
            tags=\\{["testing", "many different", "tags and", "tag sizes", "like what if", "there were a", "metric", "fuckton", "of tags", "and they took up", "a lot of room", "+"]\\}
        />

    </ul> */}

<ul role="list" class="card-masonry">

<CardH href="https://docs.astro.build/" title="Documentation" date="00/00/00" />

<CardH title="GUILLOTINE" href="string" thumb="string" date="string" text="string" tags={["string"]} {...{ "Nsfw?:": true, "false;": true, "Dd?:": true, "true;": true }} />
<CardH href="https://astro.build/themes/" title="TITLE" date="10/10/23" />
<CardH href="https://astro.build/chat/" title="every day the same dream" date="00/00/00" />
<CardH href="https://astro.build/chat/" title="every day the same dream" date="00/00/00" />
</ul>
</main>
<Footer />
</Layout>

<style>{`
	main {
		margin: auto;
		display: flex;
		gap: 1rem;
		max-width: calc(100% - 2rem);
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 700;
		line-height: 1;
		text-align: center;
		margin-bottom: 1em;
	}

	.card-masonry {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1em;
	}
	
	.card-masonry > * {
		display: block;
		width: 100%;
	}

	.masonry-item img {
		display:block;
		width: 100%;
	}

`}</style>

</Fragment>;
