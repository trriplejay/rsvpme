Meteor.startup(function () {
  if (Groups.find().count() === 0) {
    var brideAndGroom = {
      email: 'stockbauer@gmail.com',
      members: [
        {
          name: 'Jay',
          menuItemId: ''
        },
        {
          name: 'Cat',
          menuItemId: ''
        }
      ]

    };
    Groups.insert(brideAndGroom);
  }
  if (MenuItems.find().count() === 0) {
    var itemList = [
      {
        title: 'Filet medallion',
        description: 'Filet medallion in red wine mushroom sauce',
        type: 'beef',
        sides: [
          {
            name: 'New Potatoes',
            description: 'roasted with herbs and garlic'
          },
          {
            name: 'Mixed Vegetables',
            description: 'blend of broccoli, carrot, and green bell pepper with herbs'
          }
        ],
        cost: 28
      },
      {
        title: 'Salmon',
        description: 'Salmon with lemon',
        type: 'fish',
        sides: [
          {
            name: 'New Potatoes',
            description: 'roasted with herbs and garlic'
          },
          {
            name: 'vegetables',
            description: 'they\'re good for you'
          }
        ],
        cost: 23
      }
    ];

    _.each(itemList, function (item) {
      MenuItems.insert(item);
    });
  }
});