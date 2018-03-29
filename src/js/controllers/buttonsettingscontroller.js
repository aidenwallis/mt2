import _ from 'lodash';

export default class ButtonSettingsController {
  constructor($scope) {
    'ngInject';

    this.$scope = $scope;
  }

  deleteButton(button) {
    _.pull(this.buttons, button);
  }

  addButton() {
    this.buttons.push(_.extend({}, this.defaultButton));
  }
}
