export const workoutPlans = [
    {
        type: "Biceps",
        icon: "bicep",
        description: "Incline Hammer Curls . Wide-grip barbell curl . EZ-bar spider curl . Hammer Curls"
    },
    {
        type: "Abdominals",
        icon: "abs",
        description: "Landmine twist . Elbow plank . Bottoms Up . Suspended ab fall-out"
    },
    {
        type: "Back",
        icon: "back",
        description: "Atlas Stones . Barbell deficit deadlift . Back extension . Axle Deadlift"
    },
    {
        type: "Triceps",
        icon: "triceps",
        description: "Triceps dip . Decline EZ-bar skullcrusher . Dumbbell floor press . Cable V-bar push-down"
    }
]

export const musclePlans = [
    {
        type: "Biceps",
        icon: "bicep",
        workouts: [
            {
                "name": "Incline Hammer Curls",
                "type": "strength",
                "equipment": "dumbbell",
                "difficulty": "beginner",
                "instructions": "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position."
            },
            {
                "name": "Wide-grip barbell curl",
                "type": "strength",
                "equipment": "barbell",
                "difficulty": "beginner",
                "instructions": "Stand up with your torso upright while holding a barbell at the wide outer handle. The palm of your hands should be facing forward. The elbows should be close to the torso. This will be your starting position. While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard. Slowly begin to bring the bar back to starting position as your breathe in. Repeat for the recommended amount of repetitions.  Variations:  You can also perform this movement using an E-Z bar or E-Z attachment hooked to a low pulley. This variation seems to really provide a good contraction at the top of the movement. You may also use the closer grip for variety purposes."
            },
            {
                "name": "EZ-bar spider curl",
                "type": "strength",
                "equipment": "barbell",
                "difficulty": "intermediate",
                "instructions": "Start out by setting the bar on the part of the preacher bench that you would normally sit on. Make sure to align the barbell properly so that it is balanced and will not fall off. Move to the front side of the preacher bench (the part where the arms usually lay) and position yourself to lay at a 45 degree slant with your torso and stomach pressed against the front side of the preacher bench. Make sure that your feet (especially the toes) are well positioned on the floor and place your upper arms on top of the pad located on the inside part of the preacher bench. Use your arms to grab the barbell with a supinated grip (palms facing up) at about shoulder width apart or slightly closer from each other. Slowly begin to lift the barbell upwards and exhale. Hold the contracted position for a second as you squeeze the biceps. Slowly begin to bring the barbell back to the starting position as your breathe in. . Repeat for the recommended amount of repetitions.  Variation: You can also use dumbbells when performing this exercise. Just make sure you place the dumbbells on the part of the preacher bench where you would normally sit properly."
            },
            {
                "name": "Hammer Curls",
                "type": "strength",
                "equipment": "dumbbell",
                "difficulty": "intermediate",
                "instructions": "Stand up with your torso upright and a dumbbell on each hand being held at arms length. The elbows should be close to the torso. The palms of the hands should be facing your torso. This will be your starting position. Now, while holding your upper arm stationary, exhale and curl the weight forward while contracting the biceps. Continue to raise the weight until the biceps are fully contracted and the dumbbell is at shoulder level. Hold the contracted position for a brief moment as you squeeze the biceps. Tip: Focus on keeping the elbow stationary and only moving your forearm. After the brief pause, inhale and slowly begin the lower the dumbbells back down to the starting position. Repeat for the recommended amount of repetitions.  Variations: There are many possible variations for this movement. For instance, you can perform the exercise sitting down on a bench with or without back support and you can also perform it by alternating arms; first lift the right arm for one repetition, then the left, then the right, etc."
            }
        ]
    },
    {
        type:"Abdominals",
        icon: "abs",
        workouts:[
            {
                "name": "Landmine twist",
                "type": "strength",
                "equipment": "other",
                "difficulty": "beginner",
                "instructions": "Position a bar into a landmine or securely anchor it in a corner. Load the bar to an appropriate weight. Raise the bar from the floor, taking it to shoulder height with both hands with your arms extended in front of you. Adopt a wide stance. This will be your starting position. Perform the movement by rotating the trunk and hips as you swing the weight all the way down to one side. Keep your arms extended throughout the exercise. Reverse the motion to swing the weight all the way to the opposite side. Continue alternating the movement until the set is complete."
              },
              {
                "name": "Elbow plank",
                "type": "strength",
                "equipment": "body_only",
                "difficulty": "beginner",
                "instructions": "Get into a prone position on the floor, supporting your weight on your toes and your forearms. Your arms are bent and directly below the shoulder. Keep your body straight at all times, and hold this position as long as possible. To increase difficulty, an arm or leg can be raised."
              },
              {
                "name": "Bottoms Up",
                "type": "strength",
                "equipment": "body_only",
                "difficulty": "intermediate",
                "instructions": "Begin by lying on your back on the ground. Your legs should be straight and your arms at your side. This will be your starting position. To perform the movement, tuck the knees toward your chest by flexing the hips and knees. Following this, extend your legs directly above you so that they are perpendicular to the ground. Rotate and elevate your pelvis to raise your glutes from the floor. After a brief pause, return to the starting position."
              },
              {
                "name": "Suspended ab fall-out",
                "type": "strength",
                "equipment": "other",
                "difficulty": "intermediate",
                "instructions": "Adjust the straps so the handles are at an appropriate height, below waist level. Begin standing and grasping the handles. Lean into the straps, moving to an incline push-up position. This will be your starting position. Keeping your arms straight, lean further into the suspension straps, bringing your body closer to the ground, allowing your shoulders to extend, raising your arms up and over your head. Maintain a neutral spine and keep the rest of your body straight, your shoulders being the only joints allowed to move. Pause during the peak contraction, and then return to the starting position."
              }
        ]
    },
    {
        type:"Back",
        icon: "back",
        workouts:[
            {
                "name": "Atlas Stones",
                "type": "strongman",
                "equipment": "other",
                "difficulty": "beginner",
                "instructions": "Begin with the atlas stone between your feet. Bend at the hips to wrap your arms vertically around the Atlas Stone, attempting to get your fingers underneath the stone. Many stones will have a small flat portion on the bottom, which will make the stone easier to hold. Pulling the stone into your torso, drive through the back half of your feet to pull the stone from the ground. As the stone passes the knees, lap it by sitting backward, pulling the stone on top of your thighs. Sit low, getting the stone high onto your chest as you change your grip to reach over the stone. Stand, driving through with your hips. Close distance to the loading platform, and lean back, extending the hips to get the stone as high as possible."
              },
              {
                "name": "Barbell deficit deadlift",
                "type": "powerlifting",
                "equipment": "barbell",
                "difficulty": "beginner",
                "instructions": "Begin by having a platform or weight plates that you can stand on, usually 1-3 inches in height. Approach the bar so that it is centered over your feet. You feet should be about hip width apart. Bend at the hip to grip the bar at shoulder width, allowing your shoulder blades to protract. Typically, you would use an overhand grip or an over/under grip on heavier sets. With your feet, and your grip set, take a big breath and then lower your hips and bend the knees until your shins contact the bar. Look forward with your head, keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees, aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar. Lower the bar by bending at the hips and guiding it to the floor."
              },
              {
                "name": "Back extension",
                "type": "strength",
                "equipment": "body_only",
                "difficulty": "intermediate",
                "instructions": "Lie face down on a hyperextension bench, tucking your ankles securely under the footpads. Adjust the upper pad if possible so your upper thighs lie flat across the wide pad, leaving enough room for you to bend at the waist without any restriction. With your body straight, cross your arms in front of you (my preference) or behind your head. This will be your starting position. Tip: You can also hold a weight plate for extra resistance in front of you under your crossed arms. Start bending forward slowly at the waist as far as you can while keeping your back flat. Inhale as you perform this movement. Keep moving forward until you feel a nice stretch on the hamstrings and you can no longer keep going without a rounding of the back. Tip: Never round the back as you perform this exercise. Also, some people can go farther than others. The key thing is that you go as far as your body allows you to without rounding the back. Slowly raise your torso back to the initial position as you inhale. Tip: Avoid the temptation to arch your back past a straight line. Also, do not swing the torso at any time in order to protect the back from injury. Repeat for the recommended amount of repetitions.  Variations: This exercise can also be performed without a hyperextension bench, but in this case you will need a spotter. Also, a similar exercise to this one is the good morning and the stiff-legged deadlift."
              },
              {
                "name": "Axle Deadlift",
                "type": "strongman",
                "equipment": "other",
                "difficulty": "intermediate",
                "instructions": "Approach the bar so that it is centered over your feet. You feet should be about hip width apart. Bend at the hip to grip the bar at shoulder width, allowing your shoulder blades to protract. Typically, you would use an over/under grip. With your feet and your grip set, take a big breath and then lower your hips and flex the knees until your shins contact the bar. Look forward with your head, keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees, aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar. Lower the bar by bending at the hips and guiding it to the floor."
              }
        ]
    },
    {
        type:"Triceps",
        icon: "triceps",
        workouts:[
            {
                "name": "Triceps dip",
                "type": "strength",
                "equipment": "body_only",
                "difficulty": "beginner",
                "instructions": "To get into the starting position, hold your body at arm's length with your arms nearly locked above the bars. Now, inhale and slowly lower yourself downward. Your torso should remain upright and your elbows should stay close to your body. This helps to better focus on tricep involvement. Lower yourself until there is a 90 degree angle formed between the upper arm and forearm. Then, exhale and push your torso back up using your triceps to bring your body back to the starting position. Repeat the movement for the prescribed amount of repetitions.  Variations: If you are new at this exercise and do not have the strength to perform it, use a dip assist machine if available. These machines use weight to help you push your bodyweight. Otherwise, a spotter holding your legs can help. More advanced lifters can add weight to the exercise by using a weight belt that allows the addition of weighted plates."
              },
              {
                "name": "Decline EZ-bar skullcrusher",
                "type": "strength",
                "equipment": "e-z_curl_bar",
                "difficulty": "beginner",
                "instructions": "Secure your legs at the end of the decline bench and slowly lay down on the bench. Using a close grip (a grip that is slightly less than shoulder width), lift the EZ bar from the rack and hold it straight over you with your arms locked and elbows in. The arms should be perpendicular to the floor. This will be your starting position. Tip: In order to protect your rotator cuff, it is best if you have a spotter help you lift the barbell off the rack. As you breathe in and you keep the upper arms stationary, bring the bar down slowly by moving your forearms in a semicircular motion towards you until you feel the bar slightly touch your forehead. Breathe in as you perform this portion of the movement. Lift the bar back to the starting position by contracting the triceps and exhaling. Repeat until the recommended amount of repetitions is performed.  Variations: You can use a straight bar or dumbbells to perform this movement. You can also perform it on a flat bench as well."
              },
              {
                "name": "Dumbbell floor press",
                "type": "powerlifting",
                "equipment": "dumbbell",
                "difficulty": "intermediate",
                "instructions": "Lay on the floor holding dumbbells in your hands. Your knees can be bent. Begin with the weights fully extended above you. Lower the weights until your upper arm comes in contact with the floor. You can tuck your elbows to emphasize triceps size and strength, or to focus on your chest angle your arms to the side. Pause at the bottom, and then bring the weight together at the top by extending through the elbows."
              },
              {
                "name": "Cable V-bar push-down",
                "type": "strength",
                "equipment": "cable",
                "difficulty": "intermediate",
                "instructions": "Attach a V-Bar to a high pulley and grab with an overhand grip (palms facing down) at shoulder width. Standing upright with the torso straight and a very small inclination forward, bring the upper arms close to your body and perpendicular to the floor. The forearms should be pointing up towards the pulley as they hold the bar. The thumbs should be higher than the small finger. This is your starting position. Using the triceps, bring the bar down until it touches the front of your thighs and the arms are fully extended perpendicular to the floor. The upper arms should always remain stationary next to your torso and only the forearms should move. Exhale as you perform this movement. After a second hold at the contracted position, bring the V-Bar slowly up to the starting point. Breathe in as you perform this step. Repeat for the recommended amount of repetitions.  Variations: There are many variations to this movement. For instance you can use an E-Z bar attachment as well as a straight cable bar attachment for different variations of the exercise. Also, you can attach a rope to the pulley as well as using a reverse grip on the bar exercises. Just like the Triceps Pushdown but with the V-Bar attachment."
              }
        ]
    }
]