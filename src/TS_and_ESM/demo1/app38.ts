let command: string | string[];

command = "pwd";
command.toLowerCase();

command = ["ls", "-la"];
command.join(" ");

function composeCommand(command: string | string[]): string {

    if (typeof command === "string") {
        return command;
    }

    return command.join(" ");
}

type Person = {
    firstName: string;
    lastName?: string | null | undefined;
};

function getFullName(person: Person): string {

    const { firstName, lastName } = person;

    if (!lastName) {
        return firstName;
    }

    return `${firstName} ${lastName}`;
}


export { };