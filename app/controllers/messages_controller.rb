class MessagesController < ApplicationController

  def create
    @chatroom = Chatroom.find(params[:chatroom_id])
    @message = Message.new(message_params)
    @message.chatroom = @chatroom
    @message.user = current_user
    if @message.save
      # we want to tell the subscribers there has been a new message
      # Broadcast!
      # ChatroomChannel.broadcast_to(which_channel, what_to_send)
      ChatroomChannel.broadcast_to(
        @chatroom,
        render_to_string(partial: 'message', locals: { message: @message })
      )
      redirect_to chatroom_path(@chatroom, anchor: "message-#{@message.id}")
    else
      render 'chatrooms/show'
    end
  end

  private

  def message_params
    params.require(:message).permit(:content)
  end
end
