import pygame
import sys
from starfield import Starfield

def main():
    pygame.init()
    screen = pygame.display.set_mode([1100, 1100])

    stars = [Starfield(screen) for _ in range(250)]

    running = True

    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        screen.fill("black")

        for star in stars:
            star.update()

        pygame.display.update()

    pygame.quit()
    sys.exit()

if __name__ == "__main__":
    main()
