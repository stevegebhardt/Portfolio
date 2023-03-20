This is a simple database for storing various decks in Magic the Gathering.

Later on I would like to organize it such that there is a collection of Formats for MTG, then in each format is a collection of decks.

A couple of problems I had were:
1.) Getting the edit/new sections to add more than one input so I could keep each card it's own index in the array. I wanted to have it so that the user could add an unknown amount of inputs and remove any they didn't need.
I was able to solve the problem, but I do not know why the solution works. I would also like to make it so the focus is on the new input created. I was able to find something " .focus()" but was unable to get it operational.
2.)The object fit/height settings for the banners causes them to show more/less of the picture when the screen is wider or more narrow.
3.)Could not figure out how to nest the collections. I think I was close(refer to git branch relationships). But got lost when trying to figure out how to call up/display data on the rendered page.

Learned a lot about ::before & ::after pseudo classes for this css. As well as using custom variables in css. Makes it much easier for repeatable settings, i.e. color, or font.
