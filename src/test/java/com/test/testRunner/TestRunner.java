package com.test.testRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/com/test/features", glue = "com/test/stepDefinitions", monochrome = true,
//dryRun = true
		strict = true, plugin = { "pretty", "html:test-output", "json:test-output/op.json" }, tags = {
				"@smoketest,@regressiontest" })
public class TestRunner {

}
