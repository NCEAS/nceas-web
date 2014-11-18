/**
 * NCEAS Calendar (Front End)
 *  - Written in Angular -- it's awesome, so check 
 *    it out if you haven't already!
 * @author Zachary Babtkis <zackbabtkis@gmail.com>
 * @date   March 26 2014
 * @url    http://nceas.ucsb.edu/calendar
 */
;(function() {
  var cal = angular.module('NCEASCalendar', ['ui.calendar', 'ui.bootstrap']);

  cal.value('Colors', {
    NEAD: '#75903b',
    DRUPAL: '#f26d43',
    GOOGLE: '#6fbca4'
  });

  /**
   * Creates spinner on element when 'loading' event fires
   */
  cal.directive('spinTarget', function() {
      return {
        restrict: 'A',
        link: function(scope, elem, attr) {

          // Instantiate new Spin.js object
          var spinner = new Spinner({
            color: '#aaa'
          });

          function showSpinner() {
            spinner.spin(elem[0]);
          }

          function hideSpinner() {
            spinner.stop();
          }

          scope.$on('loading', showSpinner);
          scope.$on('loaded', hideSpinner);
        }
      };
    })

  /**
   * Implements ui-calendar (fullcalendar)
   * - pulls calendar events from two sources, drupal and the
   *   NCEAS external database over AJAX.
   */
  cal.controller('CalendarCtrl', function($scope, $http, $filter, Colors) {

      /**
       * Creates calener event loader
       * @param {String} source - name of source to use in AJAX call.
       *  - check nceas_calendar.module for source names.
       * @return {Function} performs load of events over AJAX when calendar
       *  month changes.
       */
      function load(source) {
        return function(start, end, callback) {
          var start = $filter('date')(start, 'yyyy-MM-dd')
            , end   = $filter('date')(end, 'yyyy-MM-dd');

          $scope.$emit('loading');

          // When AJAX call complete, emit loaded event (for spinner)
          // Also resolve callback with data
          function complete(data) {
            $scope.$emit('loaded');
            callback(data);
          }

          $http.get('/calendar/events/' + source + '/' + start + '/' + end)
            .success(complete);

        };
      };

    $scope.options = {

      // Add tooltip that displays more info
      eventRender: function(event, element) {
    	  
        // Build accessible event description string for screen readers
        var acc = "", content = "";

        var date_fmt = event.allDay ? 'M-d-yy' : 'M-d-yy h:mm tt';

        var start = jQuery.fullCalendar.formatDate(event._start, date_fmt)
          , end   = jQuery.fullCalendar.formatDate(event._end, date_fmt);

        if(event.description) {
          acc += event.description + " ";
          content += "<p>" + event.description + "</p>";
        }

        acc += "Start Date: " + start + " ";
        content += "<p><label>Start: </label><span> " + start + "</span></p>";

        acc += "End Date: " + end + " ";
        content += "<p><label>End: </label><span> " + end + "</span></p>";

        element.attr('alt', acc);
        element.popover({
          title: event.title,
          content: content,
          html: true,
          placement: 'top',
          trigger: 'hover'
        });
      },
      weekMode : "liquid" 
    };

      $scope.nead   = {
        events: load('nead'),
        color: Colors.NEAD,
        textColor: 'white'
      };

      $scope.drupal = {
        events: load('drupal'),
        color: Colors.DRUPAL,
        textColor: 'white'
      };

      $scope.google = {
        url: 'https://www.googleapis.com/calendar/v3/calendars/k5ou8sf39esk17b0ovlujarvj8%40group.calendar.google.com/events?key=AIzaSyD0X7lRFDKgZYGRzuH0Q2NEzhzjLWyp_jQ',
        color: Colors.GOOGLE,
        textColor: 'white'
      };

      // All event sources that are used in calendar.
      $scope.eventSources = [$scope.nead, $scope.drupal, $scope.google];
    });

}).call(this);

