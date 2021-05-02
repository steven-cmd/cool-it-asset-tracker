function Header(props) {
  return (
    <header>
      <h1>テクノロジートラッカー</h1>

      <iframe
        className="music-player"
        src="https://bandcamp.com/EmbeddedPlayer/album=565792550/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/"
        seamless
      >
        <a href="https://dreamcatalogue.bandcamp.com/album/--18">
          新しい日の誕生 by 2814
        </a>
      </iframe>
    </header>
  );
}

export default Header;
