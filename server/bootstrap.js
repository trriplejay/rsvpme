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
  var itemList = [
    {
      mainCourse: 'Filet medallion in red wine mushroom sauce',
      type: 'beef',
      sides: [
        {
          description: 'Potatoes roasted with herbs and garlic'
        },
        {
          description: 'Vegetable Medley'
        }
      ]
    },
    {
      mainCourse: 'Lemon dill salmon filet and garlic shrimp',
      type: 'fish',
      sides: [
        {
          description: 'Rice pilaf'
        },
        {
          description: 'Sugar snap peas'
        }
      ]
    },
    {
      mainCourse: 'White vegetarian lasagna',
      type: 'vegetarian',
      sides: [
        {
          description: 'Green chili smashed sweet potato'
        },
        {
          description: 'Green beans'
        }
      ]
    },
    {
      mainCourse: 'Chicken Marsala',
      type: 'chicken',
      sides: [
        {
          description: 'squash and zuchini with roma tomatoes'
        },
        {
          description: 'roasted red potatoes in olive oil, basil, and garlic'
        }
      ]
    }
  ];

  _.each(itemList, function (item) {
    if (MenuItems.find({type:item.type}).count() === 0)
      MenuItems.insert(item);
  });
});
