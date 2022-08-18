import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ['banner']
  connect() {
    console.log("hello from navbarcontroller!")
  }

  updateNavbar() {
    const banner = document.querySelector(".banner")
    if(window.scrollY >= banner.scrollHeight) {
      this.element.classList.add("navbar-lewagon-white")
    } else {
      this.element.classList.remove("navbar-lewagon-white")
    }
  }
}
