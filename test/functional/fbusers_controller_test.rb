require 'test_helper'

class FbusersControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get callback" do
    get :callback
    assert_response :success
  end

end
