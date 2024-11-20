/*"This is a powerful story! It's beautifully written and uses John Leslie's tenacity as a metaphor for perseverance. Here's what makes it impactful:\n\n* **Relatable:** Every parent can relate to their child's competitive spirit.  The image of John Leslie refusing to give up even after losing ten games is incredibly endearing and resonates with anyone who's ever felt like they're facing an insurmountable challenge.\n* **Emotional Connection:** The use of \"you\" directly addresses the reader and creates a sense of shared experience. It makes the listener feel like they're being spoken to personally, drawing them into the story. \n* **Metaphorical Power:**  The story cleverly compares the reader's struggles to John Leslie's game.  The \"repossessed\" property and \"lights cut off\" represent setbacks, while the persistent dream symbolizes the reader's goals.  \n* **Call to Action:** The ending leaves the reader with a powerful message: \"It's not over until I...\" It inspires the listener to keep pushing forward despite obstacles.\n\n**Overall:** It's a compelling and inspiring story that uses a simple childhood scenario to illustrate the importance of perseverance. It leaves a lasting impression on the reader and motivates them to keep fighting for their dreams. \n"



const resultAge = 19
const user = [
    {
    age:19,
    stream:"cse"
},
{
    age:21,
    stream:"cse"
},
{
    age:19,
    stream:"ai"
},

]

const str = user.filter((check)=>check.age === resultAge)
console.log(str[0].age);
\



const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {

  return

}
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const chatSession = model.startChat({
  generationConfig,
  history: [
      {
          role: "user",
          parts: [
              { text: " was playing a game with my 9 year old son John Leslie and I beat him 10 straight games in a game called Connect 4. And finally I said, John Leslie, I'm bored, I don't want to play you anymore. And I got up, I said I'm ready to go to sleep now. John Leslie said no, you can't go now Dad. I said why? He said, it's not over until I win. That was his attitude. John Leslie won and he got up and he yawned and he said I'm ready to go to sleep now. And I'm saying to you, what if all of us took that attitude? The cause repossessed. Nobody believed in you. You've lost again and again and again. The lights are cut off but you're still looking at your dream, reviewing it every day and say to yourself, it's not over until I.\n generate a blog post from this paragraph in one long paragraph with suitable for blog post and in\njson format" },
          ],
      },
      {
          role: "model",
          parts: [
              { text: "```json\n{\"blogPost\": \"<p>Last night, I was playing Connect Four with my 9-year-old son, John Leslie. I won ten games in a row, and finally, feeling bored, I told him I was ready for bed.  But John Leslie wouldn’t let me go.  He insisted, \\\"It's not over until I win!\\\" That unwavering determination, that refusal to accept defeat, really struck me. He played until he won, and then, yawning, he declared he was ready for bed.  It got me thinking: what if we all approached our dreams, our goals, our challenges with that same unwavering resolve?  Imagine if, when faced with setbacks—when the cause is repossessed, when no one believes in you, when you've suffered repeated failures, when the lights are even cut off—you still held onto your vision, reviewing it daily, and declaring to yourself, \\\"It's not over until I...\\\" That's the kind of persistence that leads to success, the kind of grit that overcomes seemingly insurmountable odds. It's a powerful lesson learned from a simple game of Connect Four.</p>\"}\n\n```" },
          ],
      },
  ],
});




run();*/