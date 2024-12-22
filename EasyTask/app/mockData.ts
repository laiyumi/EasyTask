enum TaskStatus {
  Pending = "pending",
  Completed = "completed",
}

interface Task {
  id: number;
  title: string;
  desc: string;
  status: TaskStatus;
}

const mockTasks: Task[] = [
  {
    id: 1,
    title: "Design wireframes",
    desc: "Create wireframes for the dashboard UI.",
    status: TaskStatus.Pending,
  },
  {
    id: 2,
    title: "Develop login functionality",
    desc: "Implement login and authentication.",
    status: TaskStatus.Pending,
  },
  {
    id: 3,
    title: "Conduct user testing",
    desc: "Gather feedback from beta users.",
    status: TaskStatus.Pending,
  },
  {
    id: 4,
    title: "Fix bugs in payment system",
    desc: "Resolve issues with the payment gateway.",
    status: TaskStatus.Completed,
  },
  {
    id: 5,
    title: "Launch marketing campaign",
    desc: "Prepare materials and schedule ads.",
    status: TaskStatus.Completed,
  },
];

export default mockTasks;
