module.exports = {
  scenarios: [
    {
      name: 'default',
      dependencies: { }
    },
    {
      name: 'ember-release',
      dependencies: {
        'ember': 'components/ember#release',
        'ember-data': 'release'
      },
      resolutions: {
        'ember': 'release',
        "jquery": "~2.1.4"
      }
    },
    {
      name: 'ember-beta',
      dependencies: {
        'ember': 'components/ember#beta',
        'ember-data': 'beta'
      },
      resolutions: {
        'ember': 'beta',
        "jquery": "~2.1.4"
      }
    },
    {
      name: 'ember-canary',
      dependencies: {
        'ember': 'components/ember#canary',
        'ember-data': 'canary'
      },
      resolutions: {
        'ember': 'canary',
        "jquery": "~2.1.4"
      }
    }
  ]
};
