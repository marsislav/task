/*Navigation */
$(document).ready(function () {
  $(document).on("mouseover", ".popper-drop-holder", function () {
    let dropHolder = $(this);
    let dropElement = dropHolder.find(".popper-drop-element");
    let arrow = dropElement.find(".beak");
    if (arrow.length < 1) {
      arrow = $("<div class='beak'>&nbsp;</div>");
      arrow.appendTo(dropElement);
    }
    if (dropElement.css("display") === "none") {
      h(dropElement, dropHolder);
      new Popper(dropHolder, dropElement, {
        placement: "bottom",
        modifiers: [{ arrow: { element: arrow } }],
      });
      startDeactivationListener(
        "mouseleave",
        [dropHolder, dropElement],
        function () {
          c(dropElement, dropHolder);
        }
      );
    }
  });
  function h(m, n) {
    n.addClass("active");
    m.fadeIn();
  }
  function c(m, n) {
    n.removeClass("active");
    m.fadeOut();
  }
  $(".burger-warp").click(function () {
    $(".darker").fadeIn(250, function () {
    });
    $(".nav-mobile").stop().animate({ width: "80vw" }, 450);
    $(".middle-line")
      .stop()
      .animate({ width: "0" }, 450, function () {
        $(this).hide();
      });
    $(".up-line")
      .stop()
      .animate({ width: "0" }, 450, function () {
        $(this).hide();
      });
    $(".down-line")
      .stop()
      .animate({ width: "0" }, 450, function () {
        $(this).hide();
      });
  });
  $(".close, .darker").click(function () {
    a();
  });
  $(".nav-mobile .main-list-item .item").click(function () {
    let wrap = $(this).parent();
    let slideContent = wrap.find(".drop-sub-navigation-wrap-mobile");
    if (slideContent.css("display") === "none") {
      wrap.find(".drop-sub-navigation-wrap-mobile").slideDown(200);
    } else {
      wrap.find(".drop-sub-navigation-wrap-mobile").slideUp(200);
    }
    wrap.toggleClass("main-list-item--active");
  });
  function a() {
    $(".nav-mobile").stop().animate({ width: "0" }, 500);
    $(".darker").fadeOut(175);
    $(".up-line").show().stop().animate({ width: "26px" }, 450);
    $(".middle-line").show().stop().animate({ width: "14px" }, 450);
    $(".down-line").show().stop().animate({ width: "20px" }, 450);
  }
  $(window).resize(function () {
    a();
    
  });
  $(".faq-v2 h3").click(function () {
    $(this).next(".faq-v2 .hider").stop().slideToggle(500);
    $(this).parent().toggleClass("faq-active");
  });
  $(".about-us-tabs__item").on("click", function () {
    var m = $(this).attr("name");
    $(".about-us-tabs__item").removeClass("about-us-tabs__item--active");
    $(".select-sections[data-name]").hide();
    $(this).addClass("about-us-tabs__item--active");
    $(".select-sections[data-name=" + m + "]").fadeIn();
  });
  $("#scroll-to-plans").click(function () {
    $([document.documentElement, document.body]).animate(
      { scrollTop: $("#plans").offset().top },
      350
    );
  });
  $(".plans-compare-btn").click(function () {
    $(".plans-compare-table-v2").stop().slideToggle(350);
    $(".plans-compare-btn").find(".icon-24").toggleClass("rotate");
  });
  $("#compare-up").click(function () {
    $([document.documentElement, document.body]).animate(
      { scrollTop: $("#compare-btn").offset().top - 40 },
      350
    );
    $(".plans-compare-table-tabs-container").removeClass("fixed");
    $(".plans-compare-table-v2")
      .find("thead")
      .find(".sticky-row")
      .find("th")
      .removeClass("fixed-large-heading");
    $(".empty-heading-row").hide();
  });
  function k() {
    for (var m = 2; 6 > m; m++) {
      $(".plans-compare-table-v2")
        .find("table")
        .find("td:nth-child(" + m + ")")
        .show();
      $(".plans-compare-table-v2")
        .find("thead")
        .find("th:nth-child(" + m + ")")
        .show();
    }
  }
  function i(o, n) {
    for (var m = 2; 6 > m; m++) {
      $(".plans-compare-table-v2")
        .find("table")
        .find("td:nth-child(" + m + ")")
        .hide();
      $(".plans-compare-table-v2")
        .find("thead")
        .find("th:nth-child(" + m + ")")
        .hide();
      $(".plans-compare-table-tabs-container")
        .find("div")
        .removeClass("selected");
    }
    $(".plans-compare-table-v2")
      .find("table")
      .find("td:nth-child(" + o + ")")
      .show();
    $(".plans-compare-table-v2")
      .find("thead")
      .find("th:nth-child(" + o + ")")
      .show();
    $("." + n).addClass("selected");
  }
  $(".plans-compare-table-tabs-container").on("click", "div", function (m) {
    if (!$(this).hasClass("selected")) {
      i($(this).data("value"), $(this).attr("class"));
    }
  });


  function l() {
    if (typeof $(".thead-selector").offset() !== "undefined") {
      var m = 0;
      if (window.matchMedia("(min-width: 992px)").matches) {
        m = $(".thead-selector").offset().top;
      } else {
        m = $(".plans-compare-table-v2").offset().top;
      }
      let heightOfCompareNav = $(
        ".plans-compare-table-tabs-container"
      ).outerHeight(true);
      let heightOfCompareHolder = $(".plans-compare-table-v2").outerHeight(
        true
      );
      if (
        window.scrollY < m + heightOfCompareHolder - heightOfCompareNav - 250 &&
        $(".plans-compare-table-v2").is(":visible")
      ) {
        if (window.scrollY < m) {
          if (window.matchMedia("(min-width: 992px)").matches) {
            $(".plans-compare-table-v2")
              .find("thead")
              .find(".sticky-row")
              .find("th")
              .removeClass("fixed-large-heading");
            $(".plans-compare-table-v2")
              .find("thead")
              .find(".sticky-row")
              .removeClass("fixed-row");
            $(".plans-compare-table-v2")
              .find("thead")
              .find(".empty-heading-row")
              .hide();
          } else {
            $(".tabs-line-position-holder").height(0);
            $(".plans-compare-table-tabs-container").removeClass("fixed");
            $(".plans-compare-table-v2")
              .find("thead")
              .find(".sticky-row")
              .removeClass("fixed-row");
            $(".plans-compare-table-v2")
              .find("thead")
              .find(".sticky-row")
              .find("th")
              .removeClass("fixed-large-heading");
          }
        } else {
          if (window.matchMedia("(min-width: 992px)").matches) {
            $(".plans-compare-table-v2")
              .find("thead")
              .find(".sticky-row")
              .find("th")
              .addClass("fixed-large-heading");
            $(".plans-compare-table-v2")
              .find("thead")
              .find(".sticky-row")
              .addClass("fixed-row");
            $(".plans-compare-table-v2")
              .find("thead")
              .find(".fixed-row")
              .css("top", "0");
            $(".plans-compare-table-v2")
              .find("thead")
              .find(".empty-heading-row")
              .show();
          } else {
            $(".tabs-line-position-holder").height(heightOfCompareNav);
            $(".plans-compare-table-tabs-container").addClass("fixed");
          }
        }
      } else {
        if (window.matchMedia("(min-width: 992px)").matches) {
          $(".plans-compare-table-v2")
            .find("thead")
            .find(".fixed-row")
            .css("top", "-125px");
        } else {
          $(".tabs-line-position-holder").height(0);
          $(".plans-compare-table-tabs-container").removeClass("fixed");
          $(".plans-compare-table-v2")
            .find("thead")
            .find(".sticky-row")
            .removeClass("fixed-row");
          $(".plans-compare-table-v2")
            .find("thead")
            .find(".sticky-row")
            .find("th")
            .removeClass("fixed-large-heading");
        }
      }
    }
  }
  
  $(document).ready(function () {
    $(document).on("click", ".spanel-tab", function () {
      $(".spanel-fill").css({ fill: "#ffffff" });
      $(".cpanel-fill").css({ fill: "#a2a2ac" });
      $(".cpanel-table").addClass("hidden");
      $(".spanel-table").removeClass("hidden");
      $(".cpanel-tab").removeClass("active");
      $(".spanel-tab").addClass("active");
    });
    $(document).on("click", ".cpanel-tab", function () {
      $(".cpanel-fill").css({ fill: "#ffffff" });
      $(".spanel-fill").css({ fill: "#a2a2ac" });
      $(".cpanel-table").removeClass("hidden");
      $(".spanel-table").addClass("hidden");
      $(".cpanel-tab").addClass("active");
      $(".spanel-tab").removeClass("active");
    });
  });
  function b(m, n) {
    if ("IntersectionObserver" in window) {
      let containersObserver = new IntersectionObserver(function (o, p) {
        o.forEach(function (q) {
          if (q.isIntersecting) {
            let container = q.target;
            let result = n(container);
            if (result) {
              containersObserver.unobserve(container);
            }
          }
        });
      });
      m.forEach(function (o) {
        containersObserver.observe(o);
        o.classList.add("observe");
      });
    } else {
      m.forEach(function (o) {
        n(o);
      });
    }
  }
  let owlNode = document.querySelectorAll(".carousel-container");
  b(owlNode, function (m) {
    j(m);
    return true;
  });
  function j(n) {
    let $owl = $(n).find(".container-owl-carousel");
    $(n).removeClass("loading").addClass("ready");
    $owl.removeClass("flex-nowrap");
    m();
    function m() {
      if ($owl.length > 0) {
        $owl.addClass("owl-carousel");
        if (window.innerWidth <= 767) {
          $($owl).owlCarousel({
            center: true,
            items: 2,
            loop: true,
            margin: 20,
            autoWidth: true,
            nav: false,
            dots: false,
          });
        } else {
          $owl
            .trigger("destroy.owl.carousel")
            .removeClass("owl-carousel owl-loaded");
          $owl.find(".owl-stage-outer").children().unwrap();
        }
      }
    }
    $(window).resize(function () {
      m();
    });
  }
  let $awardsv2Owl = $(".fourallscreensOwlCarousel");
  if ($awardsv2Owl.length > 0) {
    e();
    function e() {
      $awardsv2Owl.addClass("owl-carousel");
      $awardsv2Owl.owlCarousel({
        startPosition: 0,
        margin: 10,
        autoWidth: false,
        dots: true,
        dotsEach: true,
        nav: true,
        responsive: {
          0: {
            loop: true,
            center: true,
            autoWidth: false,
            items: 1,
            margin: 0,
          },
          576: {
            loop: false,
            center: false,
            autoWidth: false,
            items: 2,
            margin: 0,
          },
          922: { center: false, autoWidth: false, items: 3, margin: 0 },
          1200: { center: false, autoWidth: false, items: 4, margin: 0 },
        },
      });
    }
  }
  let $reviewsTrustpilotOwlCarousel = $(".reviews-facebook-container");
  if ($reviewsTrustpilotOwlCarousel.length > 0) {
    $reviewsTrustpilotOwlCarousel.owlCarousel({
      startPosition: 0,
      pagination: false,
      autoWidth: false,
      dots: true,
      dotsEach: true,
      nav: true,
      responsive: {
        0: { center: true, autoWidth: false, items: 1, margin: 0 },
        768: { center: false, autoWidth: false, items: 2, margin: 0 },
        992: { center: false, autoWidth: false, items: 3, margin: 0 },
      },
    });
  }
  d($reviewsTrustpilotOwlCarousel);
  function d(r) {
    var p = r.find(".owl-stage");
    var m = r.find(".owl-stage-outer");
    function o() {
      var s = (m.width() / p.width()) * 100;
      r.parent()
        .find(".carousel-slider-bar")
        .css("width", s + "%");
    }
    function n(t, s) {
      var u = (m.width() / p.width()) * 100;
      var v = (100 - u) / (t - 1);
      r.parent()
        .find(".carousel-slider-bar")
        .animate({ marginLeft: v * s + "%" }, 250);
    }
    o();
    var q;
    r.on("resized.owl.carousel", function (s) {
      clearTimeout(q);
      q = setTimeout(function () {
        o();
        n(s.page.count, s.page.index);
      }, 252);
    });
    r.on("changed.owl.carousel", function (s) {
      n(s.page.count, s.page.index);
    });
  }
});
$(".switch-plans-to-custom-vps")
  .find("input[type='checkbox']")
  .on("change", function () {
    if ($(this).is(":checked")) {
      $(".managed-cloud-vps-plans-v2-wrap").hide();
      $(".configure-cloud").show();
      $(".switch-plans").removeClass("checked");
      $(".switch-build-your-own-vps").addClass("checked");
    } else {
      $(".managed-cloud-vps-plans-v2-wrap").show();
      $(".configure-cloud").hide();
      $(".switch-plans").addClass("checked");
      $(".switch-build-your-own-vps").removeClass("checked");
    }
  });
/* /Navigation */

$(document).ready(function () {
  //jquery for toggle sub menus
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  });

  //jquery for expand and collapse the sidebar
  $(".menu-btn").click(function () {
    $(".side-bar").addClass("active");
    $(".menu-btn").css("visibility", "hidden");
  });

  $(".close-btn").click(function () {
    $(".side-bar").removeClass("active");
    $(".menu-btn").css("visibility", "visible");
  });
});
/*Carousel*/

jQuery("#carousel").owlCarousel({
  autoplay: true,
  rewind: true /* use rewind if you don't want loop */,
  margin: 20,
  /*
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },

    600: {
      items: 2,
    },

    1024: {
      items: 3,
    },

    1366: {
      items: 4,
    },
  },
});
/*/Carousel */
/*Table */

var box = paginator({
  table: document.getElementById("DataTable").getElementsByTagName("table")[0],
  box_mode: "list",
});
box.className = "box";
document.getElementById("table_box_bootstrap").appendChild(box);

function paginator(config) {
  if (typeof config != "object")
    throw "Paginator was expecting a config object!";
  if (
    typeof config.get_rows != "function" &&
    !(config.table instanceof Element)
  )
    throw "Paginator was expecting a table or get_row function!";

  var box;
  if (!(config.box instanceof Element)) {
    config.box = document.createElement("div");
  }
  box = config.box;

  if (typeof config.get_rows != "function") {
    config.get_rows = function () {
      var table = config.table;
      var tbody = table.getElementsByTagName("tbody")[0] || table;

      children = tbody.children;
      var trs = [];
      for (var i = 0; i < children.length; i++) {
        if ((children[i].nodeType = "tr")) {
          if (children[i].getElementsByTagName("td").length > 0) {
            trs.push(children[i]);
          }
        }
      }

      return trs;
    };
  }
  var get_rows = config.get_rows;
  var trs = get_rows();

  if (typeof config.rows_per_page == "undefined") {
    var selects = box.getElementsByTagName("select");
    if (
      typeof selects != "undefined" &&
      selects.length > 0 &&
      typeof selects[0].selectedIndex != "undefined"
    ) {
      config.rows_per_page = selects[0].options[selects[0].selectedIndex].value;
    } else {
      config.rows_per_page = 12;
    }
  }
  var rows_per_page = config.rows_per_page;

  if (typeof config.page == "undefined") {
    config.page = 1;
  }
  var page = config.page;

  var pages = rows_per_page > 0 ? Math.ceil(trs.length / rows_per_page) : 1;

  if (pages < 1) {
    pages = 1;
  }
  if (page > pages) {
    page = pages;
  }
  if (page < 1) {
    page = 1;
  }
  config.page = page;

  for (var i = 0; i < trs.length; i++) {
    if (typeof trs[i]["data-display"] == "undefined") {
      trs[i]["data-display"] = trs[i].style.display || "";
    }
    if (rows_per_page > 0) {
      if (i < page * rows_per_page && i >= (page - 1) * rows_per_page) {
        trs[i].style.display = trs[i]["data-display"];
      } else {
        trs[i].style.display = "none";
      }
    } else {
      trs[i].style.display = trs[i]["data-display"];
    }
  }

  config.active_class = config.active_class || "active";
  if (
    typeof config.box_mode != "function" &&
    config.box_mode != "list" &&
    config.box_mode != "buttons"
  ) {
    config.box_mode = "button";
  }
  if (typeof config.box_mode == "function") {
    config.box_mode(config);
  } else {
    var make_button;
    if (config.box_mode == "list") {
      make_button = function (symbol, index, config, disabled, active) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "#";
        a.innerHTML = symbol;
        a.addEventListener(
          "click",
          function (event) {
            event.preventDefault();
            this.parentNode.click();
            return false;
          },
          false
        );
        li.appendChild(a);

        var classes = [];
        if (disabled) {
          classes.push("disabled");
        }
        if (active) {
          classes.push(config.active_class);
        }
        li.className = classes.join(" ");
        li.addEventListener(
          "click",
          function () {
            if (this.className.split(" ").indexOf("disabled") == -1) {
              config.page = index;
              paginator(config);
            }
          },
          false
        );
        return li;
      };
    } else {
      make_button = function (symbol, index, config, disabled, active) {
        var button = document.createElement("button");
        button.innerHTML = symbol;
        button.addEventListener(
          "click",
          function (event) {
            event.preventDefault();
            if (this.disabled != true) {
              config.page = index;
              paginator(config);
            }
            return false;
          },
          false
        );
        if (disabled) {
          button.disabled = true;
        }
        if (active) {
          button.className = config.active_class;
        }
        return button;
      };
    }

    var page_box = document.createElement(
      config.box_mode == "list" ? "ul" : "div"
    );
    if (config.box_mode == "list") {
      page_box.className = "pagination";
    }

    var left = make_button(
      "&laquo;",
      page > 1 ? page - 1 : 1,
      config,
      page == 1,
      false
    );
    page_box.appendChild(left);

    for (var i = 1; i <= pages; i++) {
      var li = make_button(i, i, config, false, page == i);
      page_box.appendChild(li);
    }

    var right = make_button(
      "&raquo;",
      pages > page ? page + 1 : page,
      config,
      page == pages,
      false
    );
    page_box.appendChild(right);
    if (box.childNodes.length) {
      while (box.childNodes.length > 1) {
        box.removeChild(box.childNodes[0]);
      }
      box.replaceChild(page_box, box.childNodes[0]);
    } else {
      box.appendChild(page_box);
    }
  }

  var dvRecords = document.createElement("div");
  dvRecords.className = "dvrecords";
  box.appendChild(dvRecords);

  if (!(typeof config.page_options == "boolean" && !config.page_options)) {
    if (typeof config.page_options == "undefined") {
      config.page_options = [
        { value: 12, text: "12" },
        { value: 15, text: "15" },
        { value: 20, text: "20" },
        { value: 0, text: "Всички" },
      ];
    }
    var options = config.page_options;
    var select = document.createElement("select");
    select.className = "records";
    for (var i = 0; i < options.length; i++) {
      var o = document.createElement("option");
      o.value = options[i].value;
      o.text = options[i].text;
      select.appendChild(o);
    }
    select.value = rows_per_page;
    select.addEventListener(
      "change",
      function () {
        config.rows_per_page = this.value;
        paginator(config);
      },
      false
    );
    dvRecords.appendChild(select);
  }

  var stat = document.createElement("span");
  stat.className = "stats";
  stat.innerHTML =
    "Страница " +
    page +
    " от " +
    pages +
    ", показани редове от " +
    ((page - 1) * rows_per_page + 1) +
    " до " +
    (trs.length < page * rows_per_page || rows_per_page == 0
      ? trs.length
      : page * rows_per_page) +
    " от общо " +
    trs.length;

  dvRecords.appendChild(stat);

  if (typeof config.tail_call == "function") {
    config.tail_call(config);
  }
  return box;
}

jQuery.fn.sortElements = (function () {
  var sort = [].sort;

  return function (comparator, getSortable) {
    getSortable =
      getSortable ||
      function () {
        return this;
      };

    var placements = this.map(function () {
      var sortElement = getSortable.call(this),
        parentNode = sortElement.parentNode,
        nextSibling = parentNode.insertBefore(
          document.createTextNode(""),
          sortElement.nextSibling
        );

      return function () {
        if (parentNode === this) {
          throw new Error(
            "You can't sort elements if any one is a descendant of another."
          );
        }

        parentNode.insertBefore(this, nextSibling);
        parentNode.removeChild(nextSibling);
      };
    });

    return sort.call(this, comparator).each(function (i) {
      placements[i].call(getSortable.call(this));
    });
  };
})();

var table = $("table");

$("th")
  .wrapInner('<span title="sort this column"/>')
  .each(function () {
    var th = $(this),
      thIndex = th.index(),
      inverse = false;

    th.click(function () {
      table
        .find("td")
        .filter(function () {
          return $(this).index() === thIndex;
        })
        .sortElements(
          function (a, b) {
            return $.text([a]) > $.text([b])
              ? inverse
                ? -1
                : 1
              : inverse
              ? 1
              : -1;
          },
          function () {
            return this.parentNode;
          }
        );

      inverse = !inverse;
    });
  });

/*/ Table */
