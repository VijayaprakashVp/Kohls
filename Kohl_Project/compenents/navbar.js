function navbar () {
    return `<div id="free_ship">
    <strong>Free shipping</strong> with $35 purchase.
    <a href="#" id="details"> details </a>
    <strong> &nbsp; Fast + free</strong> store pickup!
    <a href="#" id="details"> details </a> &nbsp;
    <strong>Take an extra</strong> 30%, 20% or 15% off when you use a Kohl's
    Card. <a href="#" id="details"> details </a>
    <hr />
  </div>

  <div id="navbar">
    <div id="logo_search">
    <a href="./index.html"
    ><img
      src="data:image/png;base64,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"
      alt="Kolh's Logo"
      class="Logo"
  /></a>
      <div id="input">
        <input
          type="text"
          id="Search_bar"
          placeholder=" &nbsp; What are you looking for today?"
        />
      </div>
    </div>
    <div id="icons">
    <a href="./signin.html" id="icon_a"
    ><div id="each_icon">
      <div class="material-icons">account_circle</div>
      <p class="nav-text">Account</p>
    </div></a
  ><a href="./products_page.html" id="icon_a"
    ><div id="each_icon">
      <div class="material-icons">shopping_cart</div>
      <p class="nav-text">$0.00</p>
    </div></a
  ><a href="./checkout.html" id="icon_a"
    ><div id="each_icon">
      <div class="material-icons check-out" id="check_out">east</div>
      <p class="nav-text">Check Out</p>
    </div></a
  >
    </div>
  </div>
  <hr />`
}


export default navbar