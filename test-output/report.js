$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/test/features/FirstFeature.feature");
formatter.feature({
  "name": "First Fearture",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Try First Scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "First Method test",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefn.first_method_test()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Second method test with args \"Hi\" and \" everybody\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefn.second_method_test_with_args_something_and_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Method with args1 and args2",
  "rows": [
    {
      "cells": [
        "First",
        "argument"
      ]
    },
    {
      "cells": [
        "Second",
        "argument"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.method_with_args1_and_args2(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Method for testing Maps",
  "rows": [
    {
      "cells": [
        "Keys1",
        "Keys2"
      ]
    },
    {
      "cells": [
        "Value 1",
        "value a"
      ]
    },
    {
      "cells": [
        "Value 1",
        "Value b"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.method_for_testing_maps(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Complete the Scenario",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefn.complete_the_scenario()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Try Second Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regressiontest"
    }
  ]
});
formatter.step({
  "name": "Intro method for Examples testing",
  "keyword": "Given "
});
formatter.step({
  "name": "Try passing args\"\u003cArg1\u003e\" and \"\u003cArg2\u003e\" using Examples keyword",
  "keyword": "When "
});
formatter.step({
  "name": "Complete testing this scenario",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Arg1",
        "Arg2"
      ]
    },
    {
      "cells": [
        "Value A",
        "Value B"
      ]
    },
    {
      "cells": [
        "value C",
        "Value D"
      ]
    },
    {
      "cells": [
        "Value E",
        "value F"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Try Second Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regressiontest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Intro method for Examples testing",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefn.intro_method_for_examples_testing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Try passing args\"Value A\" and \"Value B\" using Examples keyword",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefn.try_passing_argssomething_and_something_using_examples_keyword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Complete testing this scenario",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.complete_testing_this_scenario()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Try Second Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regressiontest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Intro method for Examples testing",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefn.intro_method_for_examples_testing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Try passing args\"value C\" and \"Value D\" using Examples keyword",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefn.try_passing_argssomething_and_something_using_examples_keyword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Complete testing this scenario",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.complete_testing_this_scenario()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Try Second Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regressiontest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Intro method for Examples testing",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefn.intro_method_for_examples_testing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Try passing args\"Value E\" and \"value F\" using Examples keyword",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefn.try_passing_argssomething_and_something_using_examples_keyword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Complete testing this scenario",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.complete_testing_this_scenario()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});