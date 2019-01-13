Feature: Single Purchases

In order to avoid subscription
As a visitor
I want to purchase a video

Scenario: Purchasing a video as a guest
  Given I am not logged in
  And there is an example lesson
  When I go to this lesson
  And I purchase the video
  Then I should be able to download it
