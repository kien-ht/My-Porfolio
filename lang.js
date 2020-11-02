var aboutMe = {
        en: "about me",
        vi: "về tôi"
    },
    skills = {
        en: "skills",
        vi: "kỹ năng"
    },
    achievement = {
        en: "achievement",
        vi: "thành tựu"
    },
    projects = {
        en: "projects",
        vi: "dự án"
    },
    hireMe = {
        en: "hire me",
        vi: "thuê tôi"
    },
    sayHi = {
        en: "Hi I'm Kien.",
        vi: "Xin chào, Em/Mình là Kiên."
    },
    introduction = {
        en: "I'm a fresher in web development. I would love to learn and work with new technologies, especially MERN stack.",
        vi: "Tôi là một lập trình viên về web. Tôi thích làm việc và học hỏi với những công nghệ mới, đặc biệt là MERN stack."
    },
    aboutMeContent = {
        en: "I'm good at Math and I have great logical thinking skills. I have exprerience in working with HTML, CSS, Bootstrap, ReactJs, Javascript and Firebase. Though I must say I'm not very good at these frameworks and languages, but know how to implement them in real project and know how to search for the problems I encounter",
        vi: "Tôi giỏi toán và suy nghĩ logic. Tôi có kinh nghiệm làm việc với HTML, CSS, Bootstrap, ReactJs, Javascript và Firebase. Mặc dù tôi chưa thành thạo sử dụng các ngôn ngữ này, nhưng tôi biết cách vận dụng, sử dụng chúng, và giải quyết các vấn đề tôi gặp phải."
    },
    downloadCv = {
        en: "download cv",
        vi: "tải hồ sơ về"
    },
    tryIt = {
        en: "try it",
        vi: "trải nghiệm"
    },
    send = {
        en: "send",
        vi: "gửi"
    },
    bachelor = {
        en: "bachelor",
        vi: "bằng đại học"
    },
    hackathon = {
        en: "THIRD PRIZE WINNER IN THE MINDX'S HACKATHON 2020",
        vi: "Giải ba cuộc thi hackathon 2020 tại MindX"
    },
    mathPrize = {
        en: "THIRD PRIZE WINNER IN THE CITY-RANKING MATH COMPETITION",
        vi: "giải ba toán cấp thành phố thpt"
    },
    mindx = {
        en: "FIRST PRIZE WINNER IN THE ENDING PROJECT AT MINDX",
        vi: "Giải nhất dự án cuối khoá tại MindX"
    },
    hireMeForm = {
        0: {
            en: "Hey Kien! My name is ",
            vi: "Xin chào Kiên! Anh/Mình là "
        },
        1: {
            en: "I'm contacting you from ",
            vi: "Anh liên lạc với em từ công ty "
        },
        2: {
            en: "We are seeking for a ",
            vi: "Bên anh đang tuyển "
        },
        3: {
            en: " that we think you might be qualified for.",
            vi: "mà anh nghĩ em phù hợp với vị trí công việc này."
        },
        4: {
            en: "Please reach out to us at ",
            vi: "Hãy liên lạc với anh qua "
        },
    },
    hireMeInput = {
        0: {
            en: "Your name",
            vi: "Tên của bạn"
        },
        1: {
            en: "Your company",
            vi: "Tên công ty"
        },
        2: {
            en: "The position you offer",
            vi: "Vị trí bạn đang cần tuyển"
        },
        3: {
            en: "Your email",
            vi: "Email của bạn"
        },
    },
    project1 = {
        title: {
            en: "Find Your Treasure",
            vi: "Find Your Treasure"
        },
        description: {
            en: "My very first personal project after 2 months stepping into coding. The game is a variation of tile-matching puzzle games such as Candy Crush. Switch and match your way through different game modes in this divine puzzle adventure. Ready to find your treasure?",
            vi: "Dự án đầu tay của tôi sau 2 tháng học code. Trò chơi này thuộc thể loại xếp kim cương, tương tự như Candy Crush. Đổi chỗ và sắp xếp kim cương để vượt qua các màn chơi trong game thú vị này. Bạn đã sẵn sàng đi tìm kho báu của bạn chưa?"
        },
        explain: {
            en: "What I did in this project:",
            vi: "Những gì tôi đã làm trong game này:"
        },
        work1: {
            en: "Designing: including writing HTML, CSS and creating images",
            vi: "Thiết kế giao diện: HTML, CSS và tạo ảnh"
        },
        work2: {
            en: "Creating varieties of cool items and options in the game",
            vi: "Tạo ra rất nhiều vật phẩm và lựa chọn trong game"
        },
        work3: {
            en: "Finding algorithms to run the game",
            vi: "Nghĩ ra logic và thuật toán để chạy game"
        },
    },
    project2 = {
        title: {
            en: "My JS City",
            vi: "My JS City"
        },
        description: {
            en: "My team project at MindX's hackathon 2020 in 36 hours. This is a fun, interactive educational programming website for those who are new to coding. On the platform, newbies train on basic Javascript syntaxes.",
            vi: "Dự án nhóm của tôi tại cuộc thi MindX's Hackathon 2020 trong 36 tiếng. Đây là một website giáo dục vui nhộn dành cho những người mới học lập trình, giúp người dùng luyện tập viết các câu lệnh và cú pháp Javascript cơ bản."
        },
        explain: {
            en: "What I contributed in this project:",
            vi: "Những gì tôi đã đóng góp cho dự án này:"
        },
        work1: {
            en: "Designing: including writing HTML, CSS and creating images",
            vi: "Thiết kế giao diện: HTML, CSS và tạo ảnh"
        },
        work2: {
            en: "Building question and answer banks",
            vi: "Xây dựng ngân hàng câu hỏi và câu trả lời"
        },
        work3: {
            en: "Writing some Javascript codes for animation",
            vi: "Dùng Javascript để tạo các hiệu ứng di chuyển trên website"
        },
    }


function translate(lang) {
    return eval("`" + $('#template').innerHTML + "`")
} 