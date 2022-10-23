import autosize from "autosize"

import "@hotwired/turbo-rails"
import "@popperjs/core"
import { Tooltip } from "bootstrap"
import "controllers"

document.addEventListener("turbo:load", () => {
  autosize(document.querySelectorAll(".autosize"))

  document.querySelectorAll('[data-bs-toggle="tooltip"]')
          .forEach(element => new Tooltip(element))
})
