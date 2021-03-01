Message.destroy_all

chatroom = Chatroom.first
users = User.all

20.times do
  Message.create!(
    user: users.sample,
    chatroom: chatroom,
    content: Faker::ChuckNorris.fact
  )
end
