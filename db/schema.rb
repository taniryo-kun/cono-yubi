# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20121201165729) do

  create_table "events", :force => true do |t|
    t.string   "event_name"
    t.datetime "event_time"
    t.string   "event_place"
    t.string   "event_pr"
    t.date     "candidate1"
    t.date     "candidate2"
    t.date     "candidate3"
    t.date     "deadline"
    t.datetime "created_at",                    :null => false
    t.datetime "updated_at",                    :null => false
    t.string   "image_url"
    t.string   "private_flag", :default => "0"
  end

  create_table "userlists", :force => true do |t|
    t.string   "event_id"
    t.string   "user_id"
    t.integer  "participant_number"
    t.integer  "candidate_response1"
    t.integer  "candidate_response2"
    t.integer  "candidate_response3"
    t.datetime "created_at",          :null => false
    t.datetime "updated_at",          :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "uid"
    t.string   "name"
    t.integer  "user_age"
    t.string   "email"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.string   "provider"
    t.string   "token"
  end

end
