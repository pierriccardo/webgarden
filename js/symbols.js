
function symbol(c, drawer, distance=5, angle=45) {

    switch (c) {
        case 'F':
            drawer.forward(distance)
            break;
        case 'O':
            drawer.flower(distance)
            break;
        case 'f':
            drawer.forward(distance, False)
            break;
        case '0':
            drawer.forward(distance)
            break;
        case '[':
            drawer.push_state()
            break;
        case ']':
            drawer.pop_state() 
            break;
        case '+':
            drawer.right(angle)
            break;
        case '-':
            drawer.left(angle)
            break;
        default:
            break;
    }
}