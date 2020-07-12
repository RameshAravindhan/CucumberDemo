package com.test.stepDefinitions;

import java.util.List;
import java.util.Map;

import org.junit.runner.RunWith;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
public class StepDefn {

	@Given("^Run the Background method$")
	public void run_the_background_method() throws Throwable {
		System.out.println("this is BG method");
	}

	@Given("^First Method test$")
	public void first_method_test() throws Throwable {
		System.out.println("this is 1st method");

	}

	@When("^Second method test with args \"([^\"]*)\" and \"([^\"]*)\"$")
	public void second_method_test_with_args_something_and_something(String strArg1, String strArg2) throws Throwable {
		System.out.println("this is 2nd method with args" + strArg1 + "......" + strArg2);

	}

	@Then("^Method with args1 and args2$")
	public void method_with_args1_and_args2(DataTable arguments) throws Throwable {
		List<List<String>> list = arguments.asLists();
		System.out.println(list.get(0).get(0));
		System.out.println(list.get(0).get(1));
	}

	@Then("^Method for testing Maps$")
	public void method_for_testing_maps(DataTable args) throws Throwable {
		for (Map<Object, Object> map : args.asMaps(String.class, String.class)) {
			System.out.println(map.get("Keys1"));
			System.out.println(map.get("Keys2"));
		}
	}

	@And("^Complete the Scenario$")
	public void complete_the_scenario() throws Throwable {
		System.out.println("this is Last method");

	}

	@Given("^Intro method for Examples testing$")
	public void intro_method_for_examples_testing() throws Throwable {
		System.out.println("This is testing intro for Examples");
	}

	@When("^Try passing args\"([^\"]*)\" and \"([^\"]*)\" using Examples keyword$")
	public void try_passing_argssomething_and_something_using_examples_keyword(String Arg1, String Arg2)
			throws Throwable {
		System.out.println(Arg1 + ".........." + Arg2);
	}

	@Then("^Complete testing this scenario$")
	public void complete_testing_this_scenario() throws Throwable {
		System.out.println("Complete examples testing");
	}

}