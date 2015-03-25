//= require jquery
//= require jquery_ujs
//= require jquery-ui-1.10.3.custom.min
//= require jquery.ui.touch-punch.min
//= require bootstrap.min
//= require bootstrap-select
//= require bootstrap-switch
//= require jquery_nested_form
//= require flatui-checkbox
//= require flatui-radio
//= require holder
//= require flatui-fileinput
//= require jquery.mCustomScrollbar.concat.min
//= require owl.carousel.min
//= require revSlider/jquery.themepunch.plugins.min
//= require revSlider/jquery.themepunch.revolution.min
//= require revSlider/revSliderOption
//= require jquery.parallax-1.1.3
//= require StickyNavBar/jquery.sticky
//= require StickyNavBar/jquery.localscroll-1.2.7-min
//= require StickyNavBar/jquery.scrollTo-1.4.2-min
//= require StickyNavBar/smooth-scroll
//= require jquery.mixitup.min
//= require smooth-scrollbar
//= require jquery.magnific-popup.min
//
//= require someOptions
//


// Some general UI pack related JS
// Extend JS String with repeat method
String.prototype.repeat = function(num) {
  return new Array(num + 1).join(this);
};

$(document).ready(function($) {

  // Add segments to a slider
  $.fn.addSliderSegments = function (amount, orientation) {
    return this.each(function () {
      if (orientation == "vertical") {
        var output = ''
          , i;
        for (i = 1; i <= amount - 2; i++) {
          output += '<div class="ui-slider-segment" style="top:' + 100 / (amount - 1) * i + '%;"></div>';
        };
        $(this).prepend(output);
      } else {
        var segmentGap = 100 / (amount - 1) + "%"
          , segment = '<div class="ui-slider-segment" style="margin-left: ' + segmentGap + ';"></div>';
        $(this).prepend(segment.repeat(amount - 2));
      }
    });
  };

  $(function() {

    // Custom Selects
    $("select[name='huge']").selectpicker({style: 'btn-hg btn-primary', menuStyle: 'dropdown-inverse'});
    $("select[name='large']").selectpicker({style: 'btn-lg btn-danger'});
    $("select[name='info']").selectpicker({style: 'btn-info'});
    $("select[name='small']").selectpicker({style: 'btn-sm btn-warning'});

    // Tabs
    $(".nav-tabs a").on('click', function (e) {
      e.preventDefault();
      $(this).tab("show");
    })

    // Tooltips
    $("[data-toggle=tooltip]").tooltip("show");

    // Add style class name to a tooltips
    $(".tooltip").addClass(function() {
      if ($(this).prev().attr("data-tooltip-style")) {
        return "tooltip-" + $(this).prev().attr("data-tooltip-style");
      }
    });

    // Make pagination demo work
    $(".pagination").on('click', "a", function() {
      $(this).parent().siblings("li").removeClass("active").end().addClass("active");
    });

    $(".btn-group").on('click', "a", function() {
      $(this).siblings().removeClass("active").end().addClass("active");
    });

    // Disable link clicks to prevent page scrolling
    $(document).on('click', 'a[href="#fakelink"]', function (e) {
      e.preventDefault();
    });

    // jQuery UI Spinner
    $.widget( "ui.customspinner", $.ui.spinner, {
      widgetEventPrefix: $.ui.spinner.prototype.widgetEventPrefix,
      _buttonHtml: function() { // Remove arrows on the buttons
        return "" +
        "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'>" +
          "<span class='ui-icon " + this.options.icons.up + "'></span>" +
        "</a>" +
        "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" +
          "<span class='ui-icon " + this.options.icons.down + "'></span>" +
        "</a>";
      }
    });

    $('#spinner-01, #spinner-02, #spinner-03, #spinner-04, #spinner-05').customspinner({
      min: -99,
      max: 99
    }).on('focus', function () {
      $(this).closest('.ui-spinner').addClass('focus');
    }).on('blur', function () {
      $(this).closest('.ui-spinner').removeClass('focus');
    });


    // Focus state for append/prepend inputs
    $('.input-group').on('focus', '.form-control', function () {
      $(this).closest('.input-group, .form-group').addClass('focus');
    }).on('blur', '.form-control', function () {
      $(this).closest('.input-group, .form-group').removeClass('focus');
    });

    // Table: Toggle all checkboxes
    $('.table .toggle-all').on('click', function() {
      var ch = $(this).find(':checkbox').prop('checked');
      $(this).closest('.table').find('tbody :checkbox').checkbox(!ch ? 'check' : 'uncheck');
    });

    // Table: Add class row selected
    $('.table tbody :checkbox').on('check uncheck toggle', function (e) {
      var $this = $(this)
        , check = $this.prop('checked')
        , toggle = e.type == 'toggle'
        , checkboxes = $('.table tbody :checkbox')
        , checkAll = checkboxes.length == checkboxes.filter(':checked').length

      $this.closest('tr')[check ? 'addClass' : 'removeClass']('selected-row');
      if (toggle) $this.closest('.table').find('.toggle-all :checkbox').checkbox(checkAll ? 'check' : 'uncheck');
    });

    // make code pretty
    window.prettyPrint && prettyPrint();
  });
});
