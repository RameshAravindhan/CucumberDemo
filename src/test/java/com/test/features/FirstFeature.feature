Feature: First Fearture

Background: run the BackGround method 
Given Run the Background method

@smoketest
Scenario: Try First Scenario
Given First Method test
When Second method test with args "Hi" and " everybody"
Then Method with args1 and args2 
|First|argument|
|Second|argument|
Then Method for testing Maps
|Keys1|Keys2|
|Value 1|value a|
|Value 2|Value b|
And Complete the Scenario

@regressiontest
Scenario Outline: Try Second Scenario
Given Intro method for Examples testing
When Try passing args"<Arg1>" and "<Arg2>" using Examples keyword
Then Complete testing this scenario

Examples:
|Arg1|Arg2|
|Value A|Value B|
|value C|Value D|
|Value E|value F|

